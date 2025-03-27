import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const features = [
	{
		title: 'ADU Design',
		description:
			'Custom Accessory Dwelling Unit designs that maximize your property value while maintaining aesthetic harmony.',
		image: '/images/home/adu-design.jpg',
		href: '/services/adu-design',
	},
	{
		title: 'Commercial Design',
		description:
			'Create inviting restaurants, massage shops, and retail spaces that elevate your business brand.',
		image: '/images/home/commercial-design.jpg',
		href: '/services/commercial',
	},
	{
		title: 'Interior Remodeling',
		description:
			'Transform your home with expert kitchen, bathroom, and living room remodeling.',
		image: '/images/home/interior-remodeling.jpg',
		href: '/services/remodeling',
	},
	{
		title: 'Wildfire Reconstruction',
		description:
			'Professional structural assessment and complete rebuilding design for wildfire-damaged properties.',
		image: '/images/home/wildfire-reconstruction.webp',
		href: '/services/wildfire',
	},
	{
		title: 'Permit Application Services',
		description:
			'Secure your building permits with our 100% approval rate and complete regulatory compliance guidance.',
		image: '/images/home/permit-services.jpg',
		href: '/services/permits',
	},
	{
		title: 'Foundation Inspection',
		description:
			'Expert foundation inspection with detailed structural reports to ensure safety and long-term stability.',
		image: '/images/home/foundation-inspection.webp',
		href: '/services/foundation',
	},
];

export default function ServiceB() {
	return (
		<section className="py-16 md:py-20 bg-secondary-background ">
			<div className="container mx-auto px-4 max-w-[1440px]">
				<div className="text-center max-w-3xl mx-auto mb-16 ">
					<h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
						Our range of services
					</h2>
					<p className="text-gray-600 text-lg">
						Comprehensive design and construction solutions for residential and
						commercial projects, delivered with expertise and attention to
						detail.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="group space-y-4 block cursor-pointer"
						>
							<div className="relative h-80 overflow-hidden rounded-2xl">
								<Image
									src={feature.image}
									alt={feature.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>
							<div>
								<h3 className="text-2xl font-bold group-hover:text-button-background transition-colors duration-200">
									{feature.title}
								</h3>
								<p className="mt-2 text-gray-600 line-clamp-2">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<Button
						variant="default"
						size="lg"
						className="group rounded bg-button-background py-6 text-md cursor-not-allowed opacity-75"
					>
						View All Services
						<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
					</Button>
				</div>
			</div>
		</section>
	);
}
