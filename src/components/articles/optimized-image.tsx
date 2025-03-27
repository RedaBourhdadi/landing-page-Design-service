'use client';

import Image from 'next/image';

interface OptimizedImageProps {
	src: string;
	alt: string;
	caption?: string;
	priority?: boolean;
	aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
}

export function OptimizedImage({
	src,
	alt,
	caption,
	priority = false,
	aspectRatio = '16/9',
}: OptimizedImageProps) {
	const aspectClasses = {
		'16/9': 'aspect-[16/9]',
		'4/3': 'aspect-[4/3]',
		'1/1': 'aspect-square',
		auto: 'aspect-auto h-auto',
	};

	return (
		<figure className="my-8">
			<div
				className={`relative ${aspectClasses[aspectRatio]} overflow-hidden rounded-lg`}
			>
				<Image
					src={src}
					alt={alt}
					fill={aspectRatio !== 'auto'}
					width={aspectRatio === 'auto' ? 1200 : undefined}
					height={aspectRatio === 'auto' ? 800 : undefined}
					className="object-cover"
					priority={priority}
					sizes="(min-width: 1024px) 896px, (min-width: 768px) 672px, 100vw"
				/>
			</div>
			{caption && (
				<figcaption className="mt-2 text-center text-sm text-stone-500">
					{caption}
				</figcaption>
			)}
		</figure>
	);
}
