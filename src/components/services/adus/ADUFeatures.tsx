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

export function ADUFeatures() {
	return (
		<section className="py-16 bg-[#FFFDF7]">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Why You Need an ADU
					</h2>
					<p className="text-gray-500 max-w-3xl mx-auto">
						Unlock the potential of your California property with a
						custom-designed Accessory Dwelling Unit (ADU). Cecilia Home provides
						expert ADU design and engineering services, making it easier than
						ever to expand your living space or generate rental income.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{/* Maximize Property Value */}
					<div className="p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<Award className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">
							MAXIMIZE PROPERTY VALUE
						</h3>
						<p className="text-gray-500 mb-6">
							Adding an ADU can significantly increase your property value in
							California&apos;s competitive real estate market. Invest in your
							future with a smart, value-added home improvement.
						</p>
					</div>

					{/* Generate Rental Income */}
					<div className=" p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<HeartHandshake className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">
							GENERATE RENTAL INCOME
						</h3>
						<p className="text-gray-500 mb-6">
							Turn your backyard into a revenue source. An ADU provides an
							excellent opportunity to earn consistent rental income in
							high-demand California locations.
						</p>
					</div>

					{/* Expand Living Space */}
					<div className="p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<Target className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">EXPAND LIVING SPACE</h3>
						<p className="text-gray-500 mb-6">
							Need more room for family, guests, or a home office? An ADU offers
							flexible space solutions to adapt to your evolving needs without
							moving.
						</p>
					</div>

					{/* Streamlined Permit Process */}
					<div className=" p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<Shield className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">
							STREAMLINED PERMIT PROCESS
						</h3>
						<p className="text-gray-500 mb-6">
							Navigating California ADU permits can be complex. We simplify the
							process, leveraging our expertise to ensure a smooth and efficient
							approval.
						</p>
					</div>

					{/* Customized Design */}
					<div className=" p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<Clock className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">CUSTOMIZED DESIGN</h3>
						<p className="text-gray-500 mb-6">
							Your ADU should reflect your style and needs. We offer
							personalized design services to create an ADU that perfectly
							complements your property and lifestyle.
						</p>
					</div>

					{/* Expert Local Guidance */}
					<div className=" p-8 border border-gray-200 group hover:bg-hover-background transition-colors duration-300">
						<div className="mb-4">
							<Users className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-3">
							EXPERT LOCAL GUIDANCE
						</h3>
						<p className="text-gray-500 mb-6">
							Benefit from our deep understanding of California ADU regulations
							and construction practices. We ensure your project is compliant
							and successful from start to finish.
						</p>
					</div>
				</div>

				<div className="mt-12 text-center">
					<ContactButton
						buttonText="Explore ADU Solutions"
						icon={<ArrowRight />}
					/>
				</div>
			</div>
		</section>
	);
}
