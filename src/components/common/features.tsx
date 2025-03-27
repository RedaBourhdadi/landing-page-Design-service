import {
	ArrowRight,
	Award,
	Clock,
	HeartHandshake,
	Shield,
	Target,
	Users,
} from 'lucide-react';
import { ContactButton } from '../common/contact-button';

export function Features() {
	return (
		<section className="py-16 md:py-20 bg-secondary-background">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
						Why Choose Cecilia Home?
					</h2>
					<p className="text-gray-500 max-w-3xl mx-auto">
						With years of experience in California&apos;s construction industry,
						we combine expertise, innovation, and dedication to deliver
						exceptional results for every project.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{/* Professional Expertise */}
					<div className="p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<Award className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">
							PROFESSIONAL EXPERTISE
						</h3>
						<p className="text-gray-500 mb-6">
							Our team consists of licensed architects and engineers with
							extensive experience in California&apos;s unique building
							requirements and regulations.
						</p>
					</div>

					{/* Client-Centered Approach */}
					<div className=" p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<HeartHandshake className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">
							CLIENT-CENTERED APPROACH
						</h3>
						<p className="text-gray-500 mb-6">
							We prioritize your vision and needs, ensuring clear communication
							and personalized attention throughout every phase of your project.
						</p>
					</div>

					{/* Comprehensive Solutions */}
					<div className="p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<Target className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">
							COMPREHENSIVE SOLUTIONS
						</h3>
						<p className="text-gray-500 mb-6">
							From initial design to final construction, we provide end-to-end
							solutions that save you time and ensure seamless project
							execution.
						</p>
					</div>

					{/* Quality Assurance */}
					<div className=" p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<Shield className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">QUALITY ASSURANCE</h3>
						<p className="text-gray-500 mb-6">
							We maintain rigorous quality standards and ensure all designs meet
							or exceed California building codes and safety requirements.
						</p>
					</div>

					{/* Timely Delivery */}
					<div className=" p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<Clock className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">TIMELY DELIVERY</h3>
						<p className="text-gray-500 mb-6">
							We respect your time and maintain strict project timelines while
							ensuring thorough attention to detail in every aspect of your
							project.
						</p>
					</div>

					{/* Local Experience */}
					<div className=" p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<Users className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">LOCAL EXPERIENCE</h3>
						<p className="text-gray-500 mb-6">
							With deep roots in California, we understand local architecture
							styles, climate considerations, and community requirements for
							successful projects.
						</p>
					</div>
				</div>

				<div className="mt-12 text-center">
					<ContactButton buttonText="Learn more about" icon={<ArrowRight />} />
				</div>
			</div>
		</section>
	);
}
