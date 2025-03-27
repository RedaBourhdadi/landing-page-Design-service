import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { ContactButton } from './contact-button';

interface Step {
	number: string;
	title: string;
	description: string;
	icon: string;
}

const steps: Step[] = [
	{
		number: '1',
		title: 'Free Consultation',
		description:
			'Expert advice on your project needs, budget considerations, and permit requirements.',
		icon: '/icons/contact.svg',
	},
	{
		number: '2',
		title: 'On-Site Assessment',
		description:
			'Precise measurements and site evaluation for accurate project planning.',
		icon: '/icons/site-visit.svg',
	},
	{
		number: '3',
		title: 'Design Development',
		description:
			'Creating detailed plans and visualizations to bring your vision alive.',
		icon: '/icons/design.svg',
	},
	{
		number: '4',
		title: 'Permit Acquisition',
		description:
			'Navigating complex approval processes to ensure code-compliant construction.',
		icon: '/icons/permit.svg',
	},
	{
		number: '5',
		title: 'Construction Support',
		description:
			'Ongoing guidance and contractor coordination throughout the building process.',
		icon: '/icons/construction.svg',
	},
];

export default function Steps() {
	return (
		<section className="py-16 md:py-20 bg-secondary-background">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
						Our Process
					</h2>
					<p className="text-center text-gray-600 text-xl mb-16 max-w-2xl mx-auto">
						Our process is designed to be transparent and efficient, delivering
						a complete one-stop service from design to final permit approval.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-5 gap-y-16 md:gap-x-6 lg:gap-x-10 mt-24">
					{steps.map((step, index) => (
						<div
							key={index}
							className="flex flex-col items-center md:items-start group transition-all duration-300 hover:-translate-y-2"
						>
							{/* Icon */}
							<div className="flex justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110">
								<div className=" p-6 rounded-2xl ">
									<Image
										src={step.icon}
										alt={step.title}
										width={64}
										height={64}
										className="w-16 h-16"
									/>
								</div>
							</div>

							{/* Content */}
							<div className="space-y-3 text-center md:text-left">
								<p className="text-primary text-lg font-semibold">
									{step.number}
								</p>
								<h3 className="text-2xl font-bold">{step.title}</h3>
								<p className="text-gray-600 text-base max-w-xs leading-relaxed">
									{step.description}
								</p>
							</div>

							{/* Mobile view - vertical line connecting steps */}
							{index < steps.length - 1 && (
								<div className="md:hidden w-px h-16 bg-gray-200 my-6"></div>
							)}
						</div>
					))}
				</div>

				<div className="mt-24 text-center">
					<ContactButton
						buttonText="Let's Get Started"
						icon={<ArrowRight className="w-6 h-6" />}
					/>
				</div>
			</div>
		</section>
	);
}
