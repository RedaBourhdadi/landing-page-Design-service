'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ContactCTA } from './contact-cta';
import { ImageGallery } from './image-gallery';
import { OptimizedImage } from './optimized-image';

// 定义可在MDX中使用的组件
const components = {
	// 自定义组件
	ContactCTA,
	ImageGallery,
	OptimizedImage,

	// 覆盖默认元素
	a: ({
		href,
		children,
		...props
	}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
		const isInternal =
			href && !href.startsWith('http') && !href.startsWith('#');
		if (isInternal) {
			return (
				<Link
					href={href || '#'}
					{...props}
					className="text-primary hover:underline"
				>
					{children}
				</Link>
			);
		}

		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="text-primary hover:underline"
				{...props}
			>
				{children}
			</a>
		);
	},

	// 可以根据需要增加更多自定义组件
};

interface MDXContentProps {
	mdxSource: MDXRemoteSerializeResult;
}

export function MDXContent({ mdxSource }: MDXContentProps) {
	// 使用状态确保组件仅在客户端渲染
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	// 只在客户端渲染MDX内容
	if (!isMounted) {
		return (
			<div className="prose prose-stone max-w-none md:prose-lg">Loading...</div>
		);
	}

	return (
		<div className="prose prose-stone max-w-none md:prose-lg">
			<MDXRemote {...mdxSource} components={components} />
		</div>
	);
}
