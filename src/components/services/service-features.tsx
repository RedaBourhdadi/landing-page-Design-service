import { ContactButton } from '@/components/common/contact-button';
import {
	ArrowRight,
	Award,
	Clock,
	HeartHandshake,
	Shield,
	Target,
	Users,
} from 'lucide-react';

interface ServiceFeaturesProps {
	title: string;
	description: string;
	features: {
		title: string;
		description: string;
	}[];
	buttonText: string;
}
export function ServiceFeatures({
	title,
	description,
	features,
	buttonText,
}: ServiceFeaturesProps) {
	return (
		<section className="py-16 md:py-20 bg-secondary-background">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
					<p className="text-gray-500 max-w-3xl mx-auto">{description}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{/* Maximize Property Value */}
					<div className="p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<Award className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">{features[0].title}</h3>
						<p className="text-gray-500 mb-6">{features[0].description}</p>
					</div>

					{/* Generate Rental Income */}
					<div className=" p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<HeartHandshake className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">{features[1].title}</h3>
						<p className="text-gray-500 mb-6">{features[1].description}</p>
					</div>

					{/* Expand Living Space */}
					<div className="p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<Target className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">{features[2].title}</h3>
						<p className="text-gray-500 mb-6">{features[2].description}</p>
					</div>

					{/* Streamlined Permit Process */}
					<div className=" p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<Shield className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">{features[3].title}</h3>
						<p className="text-gray-500 mb-6">{features[3].description}</p>
					</div>

					{/* Customized Design */}
					<div className=" p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<Clock className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">{features[4].title}</h3>
						<p className="text-gray-500 mb-6">{features[4].description}</p>
					</div>

					{/* Expert Local Guidance */}
					<div className=" p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<Users className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">{features[5].title}</h3>
						<p className="text-gray-500 mb-6">{features[5].description}</p>
					</div>
				</div>

				<div className="mt-12 text-center">
					<ContactButton buttonText={buttonText} icon={<ArrowRight />} />
				</div>
			</div>
		</section>
	);
}
