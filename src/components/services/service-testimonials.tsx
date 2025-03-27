'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export type TestimonialType = {
	content: string;
	rating: number;
	author: {
		name: string;
		city: string;
		company: string;
		batch?: string;
		image: string;
	};
};

const StarRating = ({ rating }: { rating: number }) => {
	// 将评分转换为整数和小数部分
	const fullStars = Math.floor(rating);
	const decimal = rating - fullStars;
	const stars = [];

	// 添加实心星星
	for (let i = 0; i < fullStars; i++) {
		stars.push(
			<span key={`full-${i}`} className="text-yellow-500">
				★
			</span>
		);
	}

	// 如果有小数，添加半星（大于0.3显示半星）
	if (decimal > 0.3) {
		stars.push(
			<span
				key="half"
				className="text-yellow-500"
				style={{ position: 'relative' }}
			>
				<span
					className="absolute inset-0"
					style={{ clipPath: `inset(0 ${(1 - decimal) * 100}% 0 0)` }}
				>
					★
				</span>
				<span className="text-gray-300">★</span>
			</span>
		);
	}

	// 添加剩余的空心星星
	const remainingStars = 5 - stars.length;
	for (let i = 0; i < remainingStars; i++) {
		stars.push(
			<span key={`empty-${i}`} className="text-gray-300">
				★
			</span>
		);
	}

	return <div className="flex items-center gap-0.5">{stars}</div>;
};

interface ServiceTestimonialsProps {
	testimonials: TestimonialType[];
}

export default function ServiceTestimonials({
	testimonials,
}: ServiceTestimonialsProps) {
	const gridTestimonials = testimonials.slice(0, 6);
	const TestimonialCard = ({
		testimonial,
	}: {
		testimonial: TestimonialType;
	}) => {
		return (
			<Card className="p-6 rounded-xl  cursor-pointer bg-[#FFFDF7] shadow-sm border border-gray-100 flex flex-col h-[280px] group transition-all duration-300 hover:shadow-lg hover:border-gray-200 hover:-translate-y-1 hover:bg-white">
				<div className="flex items-center justify-between mb-4">
					<StarRating rating={testimonial.rating} />
				</div>
				<p className="text-gray-700 text-base leading-relaxed line-clamp-4 flex-1 group-hover:text-gray-900">
					{testimonial.content}
				</p>
				<div className="flex items-center gap-3 pt-4 border-t border-gray-100">
					<div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-transparent group-hover:ring-yellow-400/20">
						<Image
							src={testimonial.author.image}
							alt={testimonial.author.name}
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<div>
						<p className="font-medium text-gray-900 group-hover:text-yellow-600">
							{testimonial.author.name}
						</p>
						<p className="text-sm text-gray-500">
							{testimonial.author.city}, CA
							{testimonial.author.batch && ` (${testimonial.author.batch})`}
						</p>
					</div>
				</div>
			</Card>
		);
	};

	return (
		<section className="py-16 md:py-20 overflow-hidden bg-background">
			<div className="container mx-auto px-4 max-w-[1440px]">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
						Loved By Homeowners
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Don&apos;t just take our word for it. Here&apos;s what our satisfied
						clients have to say about their experience working with us.
					</p>
					<Link
						href="https://www.thumbtack.com/ca/concord/structural-engineers/cecilia-home-cmz-studio-inc/service/404592368386564100"
						className="inline-flex cursor-pointer items-center gap-2 mt-8 px-5 py-1 bg-[#FFFDF7] rounded-full border border-gray-200  hover:shadow-md transition-all duration-300"
					>
						<div className="flex items-center gap-4">
							<div className="flex  gap-2">
								<div className="flex flex-col gap-1">
									<div className="">
										<Image
											src="/logos/thumbtack-logo.png"
											alt="Thumbtack Logo"
											width={96}
											height={96}
											className="h-8 w-auto"
										/>
									</div>
								</div>
							</div>
							<div className="flex items-center justify-center gap-1">
								<Image
									src="/logos/medal.png"
									alt="Thumbtack Logo"
									width={48}
									height={48}
									className="h-6 w-auto"
								/>

								{/* <p className="text-xl font-bold text-yellow-500">TOP 1</p> */}
							</div>
						</div>
					</Link>
				</div>

				<div className="relative">
					{/* Static Grid for Large Screens */}
					<div className="hidden lg:block testimonials-mask">
						<div className="grid grid-cols-3 gap-6">
							{gridTestimonials.map((testimonial, i) => (
								<TestimonialCard key={`grid-${i}`} testimonial={testimonial} />
							))}
						</div>
					</div>

					{/* Scrolling Track for Mobile/Tablet */}
					<div className="lg:hidden relative testimonials-mask">
						<div className="relative flex gap-4 overflow-x-hidden">
							{/* First Track */}
							<div className="flex gap-4 animate-[scroll_25s_linear_infinite]">
								{testimonials.map((testimonial, i) => (
									<div key={i} className="w-[320px] sm:w-[340px] flex-shrink-0">
										<TestimonialCard testimonial={testimonial} />
									</div>
								))}
								{/* Duplicate items in the same track for seamless loop */}
								{testimonials.map((testimonial, i) => (
									<div
										key={`dup-${i}`}
										className="w-[320px] sm:w-[340px] flex-shrink-0"
									>
										<TestimonialCard testimonial={testimonial} />
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
