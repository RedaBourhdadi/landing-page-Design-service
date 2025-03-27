import { States } from '@/components/common/states';
import Steps from '@/components/common/steps';
import { Trust } from '@/components/common/trust';
import { ServiceFeatures } from '@/components/services/service-features';
import ServiceFAQ, { QuestionType } from '@/components/services/service-fqa';
import { ServiceHero } from '@/components/services/service-hero';
import {
	ServiceProject,
	ServiceShowcase,
} from '@/components/services/service-showcase';
import ServiceTestimonials, {
	TestimonialType,
} from '@/components/services/service-testimonials';
import { getJsonLdScript } from '@/data/json-ld';
import Script from 'next/script';

/* ---------------------------------------------- Features --------------------------------------------- */
const Features = [
	{
		title: 'KITCHEN TRANSFORMATION',
		description:
			'Transform your outdated kitchen into a modern culinary haven with our custom remodeling services. Our designs blend functionality with aesthetic appeal to create the perfect space for cooking and entertaining.',
	},
	{
		title: 'BATHROOM RENOVATION',
		description:
			'Create a luxurious spa-like retreat in your own home with our bathroom remodeling expertise. From walk-in showers to custom vanities, we design spaces that combine comfort, functionality, and style.',
	},
	{
		title: 'LIVING ROOM REDESIGN',
		description:
			'Reimagine your living space with our expert interior remodeling services. We create open, flowing layouts that maximize natural light and create the perfect environment for family gatherings and entertaining guests.',
	},
	{
		title: 'ENERGY-EFFICIENT UPGRADES',
		description:
			'Incorporate sustainable and energy-efficient features in your remodel. From LED lighting to high-efficiency appliances and fixtures, we help reduce your environmental footprint and utility costs.',
	},
	{
		title: 'CUSTOM STORAGE SOLUTIONS',
		description:
			'Maximize your living space with our clever storage designs. We create custom cabinets, built-ins, and organizational systems tailored to your specific needs and lifestyle requirements.',
	},
	{
		title: 'SEAMLESS PROJECT MANAGEMENT',
		description:
			'Enjoy a stress-free remodeling experience with our comprehensive project management. We handle permits, coordinate tradespeople, and ensure every detail meets our exacting standards for quality.',
	},
];
/* --------------------------------------------- SEO -------------------------------------------- */
export const metadata = {
	title: 'Kitchen & Bathroom Remodel California | Interior Remodeling Services',
	description:
		'Expert kitchen, bathroom, living room & sunroom remodeling in California. Custom interior design, permit services, and cost-effective home renovation solutions. Free consultation.',
	keywords: [
		'kitchen remodel California',
		'bathroom remodel California',
		'home remodeling California',
		'interior remodel California',
		'living room remodel California',
		'sunroom remodel California',
		'modern bathroom remodel California',
		'small kitchen remodel California',
		'open concept kitchen remodel California',
		'kitchen remodeling contractors California',
		'bathroom remodel cost California',
		'best home remodelers California',
		'cost to remodel a small bathroom in California',
		'modern kitchen design ideas California with island',
		'home renovation California',
	],

	// Open Graph 数据 - 优化社交媒体分享
	openGraph: {
		title: 'California Kitchen & Bathroom Remodeling Experts | Interior Design',
		description:
			'Transform your California home with our professional interior remodeling services. Specializing in kitchens, bathrooms, living rooms & sunrooms with expert design and permit assistance.',
		images: [
			{
				url: 'https://www.ceciliahome.design/images/kitchen-remodel-showcase.jpg',
				width: 1200,
				height: 630,
				alt: 'Beautiful Kitchen Remodel in California',
			},
		],
		locale: 'en_US',
		type: 'website',
		siteName: 'Cecilia Home Design',
	},

	// Twitter Card 元数据
	twitter: {
		card: 'summary_large_image',
		title: 'Modern Kitchen & Bathroom Remodeling | California Design Experts',
		description:
			'See how we transform kitchens, bathrooms, living rooms & sunrooms. Get inspired by our California remodeling projects and request your free design consultation.',
		images: [
			'https://www.ceciliahome.design/images/kitchen-remodel-showcase.jpg',
		],
	},

	alternates: {
		canonical: 'https://www.ceciliahome.design/services/interior-remodeling',
	},
};

/* ---------------------------------------------- Projects --------------------------------------------- */
const serviceProjects: ServiceProject[] = [
	{
		slug: 'modern-kitchen-remodel-san-francisco',
		title: 'Modern Kitchen Remodel in San Francisco',
		description:
			'A complete kitchen transformation featuring custom cabinetry, quartz countertops, professional-grade appliances, and a spacious island with integrated seating.',
		coverImage:
			'https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVtb2RlbHxlbnwwfHx8fDE3NDE3NzEwNjJ8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'San Francisco, CA',
		squareFeet: 250,
		projectType: 'Kitchen Remodel',
	},
	{
		slug: 'luxury-bathroom-renovation-los-angeles',
		title: 'Luxury Bathroom Renovation in Los Angeles',
		description:
			'A spa-inspired master bathroom featuring a freestanding soaking tub, walk-in rainfall shower, heated floors, and custom double vanity with marble countertops.',
		coverImage:
			'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMHJlbW9kZWx8ZW58MHx8fHwxNzQxNzcxMDQzfDA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Los Angeles, CA',
		squareFeet: 150,
		projectType: 'Bathroom Renovation',
	},
	{
		slug: 'open-concept-living-room-san-diego',
		title: 'Open-Concept Living Room in San Diego',
		description:
			'A complete living room transformation featuring floor-to-ceiling windows, custom built-ins, a modern fireplace, and seamless indoor-outdoor flow to the patio area.',
		coverImage:
			'https://images.unsplash.com/photo-1618220179428-22790b461013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxvcGVuJTIwY29uY2VwdCUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzQxNzcxMDUwfDA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'San Diego, CA',
		squareFeet: 350,
		projectType: 'Living Room Redesign',
	},
	{
		slug: 'small-space-kitchen-oakland',
		title: 'Small-Space Kitchen Maximizer in Oakland',
		description:
			'A masterful kitchen remodel that transforms a compact space with clever storage solutions, space-saving appliances, and a streamlined workflow for maximum efficiency.',
		coverImage:
			'https://images.unsplash.com/photo-1600607686527-6fb886090705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMHNwYWNlJTIwa2l0Y2hlbiUyMHJlbW9kZWx8ZW58MHx8fHwxNzQxNzcxMDUzfDA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Oakland, CA',
		squareFeet: 120,
		projectType: 'Kitchen Remodel',
	},
	{
		slug: 'master-suite-remodel-palo-alto',
		title: 'Master Suite Remodel in Palo Alto',
		description:
			'A comprehensive master suite renovation featuring a bedroom with custom built-ins, a luxury ensuite bathroom, and a spacious walk-in closet with organizational systems.',
		coverImage:
			'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxtYXN0ZXIlMjBiZWRyb29tJTIwcmVtb2RlbHxlbnwwfHx8fDE3NDE3NzEwNDd8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Palo Alto, CA',
		squareFeet: 400,
		projectType: 'Master Suite Remodel',
	},
	{
		slug: 'contemporary-dining-room-sacramento',
		title: 'Contemporary Dining Room in Sacramento',
		description:
			'A stylish dining room transformation featuring custom wainscoting, a statement chandelier, built-in buffet cabinetry, and an open connection to the kitchen for entertaining.',
		coverImage:
			'https://images.unsplash.com/photo-1617104678098-de229db51175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBkaW5pbmclMjByb29tfGVufDB8fHx8MTc0MTc3MTA2Nnww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Sacramento, CA',
		squareFeet: 200,
		projectType: 'Dining Room Redesign',
	},
];
/* ------------------------------------------ question ------------------------------------------ */
const questions: QuestionType[] = [
	{
		id: 1,
		question: 'What types of interior remodeling services do you offer?',
		answer:
			'We offer comprehensive interior remodeling services including kitchen renovations, bathroom remodels, living room transformations, bedroom makeovers, dining room redesigns, and whole-home interior renovations. Our team handles everything from design and planning to material selection and construction.',
	},
	{
		id: 2,
		question: 'How long does a typical kitchen or bathroom remodel take?',
		answer:
			'The timeline varies based on the scope of your project. A standard kitchen remodel typically takes 4-8 weeks, while bathroom renovations generally take 2-5 weeks. Larger projects or those requiring structural changes may take longer. We provide detailed timelines during the planning phase and keep you updated throughout the project.',
	},
	{
		id: 3,
		question:
			'What is the average cost of a kitchen or bathroom remodel in California?',
		answer:
			'Costs vary widely depending on size, materials, fixtures, and complexity. In California, kitchen remodels typically range from $30,000 to $150,000+, while bathroom renovations range from $15,000 to $75,000+. We provide detailed estimates after understanding your specific needs and design preferences during our initial consultation.',
	},
	{
		id: 4,
		question: 'Do I need permits for interior remodeling projects?',
		answer:
			'Many interior remodeling projects in California require permits, especially those involving structural changes, plumbing, or electrical work. Our team handles the entire permit process, ensuring all renovations meet local building codes and regulations. We manage the paperwork and coordination with local authorities to make the process seamless for you.',
	},
	{
		id: 5,
		question:
			'Can you help with material selection and interior design choices?',
		answer:
			'Absolutely! Our design team works closely with you to select materials, finishes, fixtures, and color schemes that align with your vision and lifestyle needs. We provide professional guidance on current trends, durable materials, and design solutions that maximize both functionality and aesthetic appeal for your specific space.',
	},
];
/* ---------------------------------------- testimonials ---------------------------------------- */
const testimonials: TestimonialType[] = [
	{
		content:
			"Cecilia Home transformed our outdated kitchen into a modern masterpiece. Mason personally oversaw the design process, ensuring every detail was perfect. The kitchen remodeling team was professional and completed the project ahead of schedule, giving us the culinary space we've always dreamed of!",
		rating: 4.9,
		author: {
			name: 'Emma Chen',
			city: 'San Francisco',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1573496358961-3c82861ab8f4',
		},
	},
	{
		content:
			"Our master bath renovation with Cecilia Home exceeded all expectations. Mason's design suggestions modernized our space while maintaining the character of our older home. Their attention to bathroom tile selection and fixture placement created the spa-like bath retreat we've always wanted. Worth every penny!",
		rating: 5.0,
		author: {
			name: 'Thomas Rodriguez',
			city: 'Palo Alto',
			company: 'Property Owner',
			image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
		},
	},
	{
		content:
			'The living room redesign by Cecilia Home completely transformed how we entertain. Mason suggested removing a non-load bearing wall to create an open concept between our living area and kitchen. Their interior remodeling expertise made our home feel entirely new while staying within our budget.',
		rating: 4.7,
		author: {
			name: 'Olivia Park',
			city: 'San Jose',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
		},
	},
	{
		content:
			'Mason and the Cecilia Home team completed our kitchen remodel with exceptional attention to detail. From custom cabinetry to the perfect kitchen island layout, every aspect was thoughtfully designed. Their project management made what could have been a stressful kitchen renovation into a smooth, enjoyable process!',
		rating: 4.8,
		author: {
			name: 'James Thompson',
			city: 'Mountain View',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f',
		},
	},
	{
		content:
			"Our sunroom addition by Cecilia Home has become our favorite space in the house. Mason designed a sunroom that maximizes natural light while maintaining energy efficiency. The construction team's skilled craftsmanship ensured every detail was perfect, from the custom windows to the heated flooring.",
		rating: 4.9,
		author: {
			name: 'Sophia Wong',
			city: 'Berkeley',
			company: 'Property Owner',
			image: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b',
		},
	},
	{
		content:
			"Cecilia Home's bath and kitchen renovation completely transformed our 1980s home. Mason's eye for design created a cohesive flow between spaces, and their construction team's expertise with plumbing and electrical work was impressive. Our new bath features a walk-in shower that feels like a luxury hotel!",
		rating: 4.9,
		author: {
			name: 'Daniel Kim',
			city: 'Cupertino',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6',
		},
	},
];

/* ---------------------------------------------- Page --------------------------------------------- */
export default function InteriorRemodelPage() {
	return (
		<div>
			<Script {...getJsonLdScript('services-interior-remodeling')} />
			<ServiceHero
				smallText="Your Local Interior Remodeling Experts"
				title="California Interior Remodeling Experts"
				description="Expert kitchen, bathroom, and living room remodeling services in California. We bring your vision to life with premium materials, skilled craftsmanship, and meticulous attention to detail."
				image="/images/home/interior-remodeling.jpg"
			/>
			<States />

			<ServiceFeatures
				title="Elevate Your Home's Interior"
				description="Revitalize your California home with our premium interior remodeling services. From gourmet kitchens to luxurious bathrooms and inviting living spaces, Cecilia Home delivers exceptional craftsmanship and innovative designs tailored to your lifestyle."
				features={Features}
				buttonText="Start Your Transformation"
			/>
			<Steps />

			<ServiceShowcase
				title="Featured Interior Remodeling Projects"
				description="Explore our collection of stunning kitchen, bathroom, and living space transformations throughout California. Each project showcases our commitment to exceptional design, quality craftsmanship, and attention to detail."
				buttonText="Get Your Free Consultation"
				serviceProjects={serviceProjects}
			/>
			<ServiceFAQ
				title="Frequently Asked Questions"
				description="Answers to common questions about interior remodeling, renovation timelines, costs, and more."
				questions={questions}
			/>
			<ServiceTestimonials testimonials={testimonials} />
			<Trust />
		</div>
	);
}
