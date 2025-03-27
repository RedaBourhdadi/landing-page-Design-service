import { ContactButton } from '@/components/common/contact-button';
import Image from 'next/image';

// 获取图片资源
const heroImage =
	'https://images.unsplash.com/photo-1631215320889-7cf5eb3224f8?auto=format&fit=crop&q=80&w=1200&h=800';

export function ADUHero() {
	return (
		<section className="min-h-[66.67vh] flex items-center overflow-hidden bg-background">
			<div className="container mx-auto px-4 py-8 sm:py-16 lg:py-24">
				<div className="flex flex-col md:flex-row items-stretch gap-8 lg:gap-12">
					{/* Left Content */}
					<div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center md:pr-4 lg:pr-8">
						<p className="text-gray-500 font-semibold text-sm sm:text-base">
							CALIFORNIA ADU DESIGN & ENGINEERING
						</p>
						<h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight sm:leading-snug lg:leading-tight mt-3 sm:mt-4">
							Your Trusted ADU Design Experts
						</h1>
						<p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-gray-500 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl leading-relaxed">
							Expand your living space with our specialized ADU design and
							engineering services in California. We manage permits, plans, and
							construction to bring your ADU vision to life.
						</p>
						<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
							<ContactButton buttonText="Get A Free ADU Consultation" />
						</div>
					</div>

					{/* Right Image */}
					<div className="w-full md:w-1/2 flex items-center justify-center">
						<div className="relative w-full h-0 pb-[75%] overflow-hidden rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
							<Image
								src={heroImage}
								alt="ADU Design and Engineering"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
