'use client';

import { ContactButton } from '@/components/common/contact-button';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeamClientImageProps {
	src: string;
	alt: string;
	className?: string;
}

const TeamClientImage = ({ src, alt, className }: TeamClientImageProps) => {
	return (
		<div
			className={`relative overflow-hidden rounded-xl shadow-lg ${className}`}
		>
			<Image
				src={src}
				alt={alt}
				width={1200}
				height={800}
				className="object-cover w-full h-full transition-all duration-500 hover:scale-105"
			/>
		</div>
	);
};

export const ADUTrustSection = () => {
	// Image data for collaboration showcase
	const collaborationImages = [
		{
			src: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5',
			alt: 'Team members discussing project details with clients in the office',
		},
		{
			src: 'https://images.unsplash.com/photo-1562564055-71e051d33c19',
			alt: 'Client signing design contract with our architecture team',
		},
		{
			src: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
			alt: 'Architects presenting building plans during design meeting',
		},
		{
			src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad',
			alt: 'Team and clients reviewing project progress together',
		},
		{
			src: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c',
			alt: 'Collaborative workshop session with residential clients',
		},
		{
			src: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d',
			alt: 'Design presentation for commercial building project',
		},
		{
			src: 'https://images.unsplash.com/photo-1560264357-8d9202250f21',
			alt: 'Architects and clients reviewing digital building models',
		},
		{
			src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df',
			alt: 'Team collaborating on residential design solutions',
		},
	];

	// Duplicate images to ensure continuous scrolling
	const duplicatedImages = [...collaborationImages, ...collaborationImages];

	return (
		<section className="md:py-16 py-6 bg-background overflow-hidden">
			<div className="px-6 md:px-10 max-w-[100vw]">
				<div className="text-center mb-12 max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
						We are your trusted design and engineering experts.
					</h1>
					<p className="text-xl text-gray-600">
						Since 2010, Cecilia Home has delivered premium architectural design
						and construction solution across California. Our collaborative
						approach combines technical expertise with personalized attention,
						ensuring each project reflects your unique vision and exceeds your
						expectations.
					</p>
				</div>
				{/* CTA Button */}
				<div className=" text-center">
					<ContactButton
						buttonText="Get Started with Your Project"
						className=" text-white px-8 py-3 text-lg rounded shadow-md transition-all duration-300"
					/>
				</div>
				{/* Slider Container with CSS Animation */}
				<div className="overflow-hidden relative mt-6">
					<div className="carousel-container w-full py-4">
						<div
							className="flex carousel-slide animate-rtl-scroll"
							style={{
								width: `${duplicatedImages.length * 650}px`, // Wider slides for larger images
							}}
						>
							{duplicatedImages.map((image, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										duration: 0.6,
										delay: Math.min(index, 7) * 0.1,
									}}
									className="flex-none px-6 md:px-8" // Increased padding for more space between images
									style={{ width: '650px' }} // Increased width to match container calculation
								>
									<TeamClientImage
										src={image.src}
										alt={image.alt}
										className="h-96 md:h-[550px] w-full" // Taller and wider images
									/>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* CSS for animation */}
			<style jsx global>{`
				@keyframes rtlScroll {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}

				.animate-rtl-scroll {
					animation: rtlScroll 40s linear infinite; /* Slower animation for better viewing */
				}

				.carousel-container:hover .animate-rtl-scroll {
					animation-play-state: paused;
				}
			`}</style>
		</section>
	);
};
