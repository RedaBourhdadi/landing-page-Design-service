'use client';

import Image from 'next/image';
import { useState } from 'react';

interface GalleryImage {
	src: string;
	alt: string;
	caption?: string;
}

interface ImageGalleryProps {
	images: GalleryImage[];
	columns?: 2 | 3;
}

export function ImageGallery({ images, columns = 2 }: ImageGalleryProps) {
	const [expandedImage, setExpandedImage] = useState<GalleryImage | null>(null);

	const closeExpandedImage = () => {
		setExpandedImage(null);
	};

	const colClass =
		columns === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2';

	return (
		<>
			<div className={`my-8 grid ${colClass} gap-4`}>
				{images.map((image, index) => (
					<div
						key={index}
						className="group cursor-pointer"
						onClick={() => setExpandedImage(image)}
					>
						<div className="relative aspect-[4/3] overflow-hidden rounded-lg">
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-105"
								sizes={`(min-width: 768px) ${
									columns === 3 ? '256px' : '384px'
								}, 100vw`}
							/>
						</div>
						{image.caption && (
							<p className="mt-2 text-sm text-stone-500">{image.caption}</p>
						)}
					</div>
				))}
			</div>

			{/* 放大查看的模态框 */}
			{expandedImage && (
				<div
					className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
					onClick={closeExpandedImage}
				>
					<div
						className="relative max-w-5xl w-full max-h-[90vh]"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="relative w-full h-auto aspect-auto">
							<Image
								src={expandedImage.src}
								alt={expandedImage.alt}
								fill
								className="object-contain"
								sizes="90vw"
							/>
						</div>
						{expandedImage.caption && (
							<p className="mt-2 text-center text-white">
								{expandedImage.caption}
							</p>
						)}
						<button
							className="absolute -top-10 right-0 text-white text-xl"
							onClick={closeExpandedImage}
						>
							关闭 &times;
						</button>
					</div>
				</div>
			)}
		</>
	);
}
