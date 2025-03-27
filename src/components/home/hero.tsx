import Image from 'next/image';
import { ContactButton } from '../common/contact-button';

export function Hero() {
	return (
		<section className="min-h-[66.67vh] flex items-center overflow-hidden bg-background">
			<div className="container mx-auto px-4 py-8 sm:py-16 lg:py-24">
				<div className="flex flex-col md:flex-row items-stretch gap-8 lg:gap-12">
					{/* Left Content */}
					<div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center md:pr-4 lg:pr-8">
						<p className="text-gray-500 font-semibold text-sm sm:text-base">
							Your Local Design & Engineering Experts
						</p>
						<h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight sm:leading-snug lg:leading-tight mt-3 sm:mt-4">
							California Licensed Design & Engineering Experts
						</h1>
						<p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-gray-500 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl leading-relaxed">
							California&apos;s licensed architectural and structural
							engineering experts with 20+ years of experience. We handle
							designs, permits, and construction plans with a 95% approval rate.
							Transform your vision into reality.
						</p>
						<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
							<ContactButton buttonText="Get A Free Consultation" />
						</div>
					</div>

					{/* Right Image */}
					<div className="w-full md:w-1/2 flex items-center justify-center">
						<div className="relative w-full h-0 pb-[75%] overflow-hidden rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
							<Image
								src="/images/home/hero-image.jpg"
								alt="Professional Home Design"
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
