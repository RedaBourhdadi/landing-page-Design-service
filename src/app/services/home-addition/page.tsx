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
		title: 'SECOND STORY ADDITION SPECIALISTS',
		description:
			"Transform your California home with a seamless second story addition. Our structural engineers and architects design vertical expansions that double your living space while maintaining your home's aesthetic integrity and neighborhood compatibility.",
	},
	{
		title: 'MASTER SUITE EXTENSIONS',
		description:
			'Create your dream master retreat with our custom bedroom and bathroom additions. We specialize in designing luxurious master suites with walk-in closets, spa-like bathrooms, and private outdoor access, maximizing comfort and property value.',
	},
	{
		title: 'KITCHEN & LIVING SPACE EXPANSION',
		description:
			'Expand your kitchen and living areas to create the heart of your home. Our kitchen addition services include open-concept designs, high-end appliance integration, custom cabinetry, and seamless transitions to outdoor living spaces.',
	},
	{
		title: 'COMPREHENSIVE PERMIT MANAGEMENT',
		description:
			"Navigate California's complex permitting requirements with ease. Our team handles all documentation, structural calculations, and permit applications, ensuring your addition project is fully compliant with local building codes and HOA requirements.",
	},
	{
		title: 'COST-EFFECTIVE SQUARE FOOTAGE ADDITION',
		description:
			"Maximize your property value with strategic square footage additions. We analyze your home's layout to identify the most cost-effective expansion opportunities, delivering the highest return on investment while minimizing construction disruption.",
	},
	{
		title: 'ARCHITECTURAL HARMONIZATION',
		description:
			'Seamlessly blend new additions with your existing home. Our design team ensures architectural continuity through matching materials, complementary rooflines, and thoughtful transitions, creating an addition that looks and feels like it was always part of your home.',
	},
];

/* --------------------------------------------- SEO -------------------------------------------- */
export const metadata = {
	title:
		'Home Addition & House Extension California | Room & Second Story Additions',
	description:
		'Expert home addition services in California for room, second story, kitchen & master suite extensions. Professional design, permits, and cost-effective square footage expansion solutions.',
	keywords: [
		'home addition California',
		'house extension California',
		'room addition California',
		'second story addition California',
		'kitchen addition California',
		'bathroom addition California',
		'master suite addition California',
		'cost of home addition California',
		'home addition plans California',
		'home addition contractors California',
		'increase home square footage California',
		'add square footage to house California',
		'cost to build a second story addition in California',
		'best contractors for home additions in California',
		'home extension design California',
		'house addition permit California',
	],

	// Open Graph 数据
	openGraph: {
		title:
			'California Home & Room Addition Specialists | Expand Your Living Space',
		description:
			'Transform your California home with expert addition services. From second story additions to room extensions, we handle design, engineering, permits and construction to maximize your property value.',
		images: [
			{
				url: 'https://www.ceciliahome.design/images/home-addition-showcase.jpg',
				width: 1200,
				height: 630,
				alt: 'Beautiful Home Addition Project in California',
			},
		],
		locale: 'en_US',
		type: 'website',
		siteName: 'Cecilia Home Design',
	},

	// Twitter Card 元数据
	twitter: {
		card: 'summary_large_image',
		title:
			'Expert House Extension & Addition Services | California Design Specialists',
		description:
			'Add valuable square footage to your California home. See our portfolio of room additions, second story extensions, and space expansion projects with complete permit services.',
		images: [
			'https://www.ceciliahome.design/images/home-addition-showcase.jpg',
		],
	},

	alternates: {
		canonical: 'https://www.ceciliahome.design/services/home-additions',
	},
};

/* ---------------------------------------------- Projects --------------------------------------------- */
const serviceProjects: ServiceProject[] = [
	{
		slug: 'second-story-addition-san-francisco',
		title: 'Elegant Second Story Addition in San Francisco',
		description:
			'Complete second floor addition that doubled the living space of this San Francisco Victorian home. The project included three bedrooms, two bathrooms, and a home office while preserving the historical character of the original structure.',
		coverImage:
			'https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVuc2lvbiUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NDIzMDI5MTl8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'San Francisco, CA',
		squareFeet: 1250,
		projectType: 'Second Story Addition',
	},
	{
		slug: 'master-suite-extension-los-angeles',
		title: 'Luxury Master Suite Extension in Los Angeles',
		description:
			'Designed and constructed a 650 sq ft master suite addition featuring a spacious bedroom, walk-in closet, and spa-inspired bathroom with soaking tub. The extension includes private patio access and seamlessly connects to the existing home.',
		coverImage:
			'https://images.unsplash.com/photo-1532372576444-dda954194ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxzZWNvbmQlMjBzdG9yeSUyMGhvbWUlMjBhZGRpdGlvbnxlbnwwfHx8fDE3NDIzMDI5MTV8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Los Angeles, CA',
		squareFeet: 650,
		projectType: 'Master Suite Addition',
	},
	{
		slug: 'kitchen-family-room-expansion-san-diego',
		title: 'Open Concept Kitchen  in San Diego',
		description:
			'Expanded and renovated this San Diego home with an additional 580 sq ft of kitchen and family room space. The project featured vaulted ceilings, large windows for natural light, and a seamless indoor-outdoor connection to the new patio area.',
		coverImage:
			'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHw1fHxzZWNvbmQlMjBzdG9yeSUyMGhvbWUlMjBhZGRpdGlvbnxlbnwwfHx8fDE3NDIzMDI5MTV8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'San Diego, CA',
		squareFeet: 580,
		projectType: 'Room Addition',
	},
	{
		slug: 'full-second-floor-addition-oakland',
		title: 'Complete Second Floor Addition in Oakland',
		description:
			"Transformed this single-story Oakland bungalow with a full second-floor addition, adding three bedrooms, two bathrooms, and a laundry room. The project doubled the home's square footage while maintaining its architectural character.",
		coverImage:
			'https://images.unsplash.com/photo-1496307653780-42ee777d4833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHw0fHxob3VzZSUyMGV4dGVuc2lvbiUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NDIzMDI5MTl8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Oakland, CA',
		squareFeet: 1100,
		projectType: 'Second Story Addition',
	},
	{
		slug: 'modern-rear-extension-palo-alto',
		title: 'Modern Rear Extension in Palo Alto',
		description:
			'Designed and built a contemporary rear extension featuring floor-to-ceiling windows, an open-plan kitchen and dining area, and seamless connection to the landscaped garden. The addition brought valuable living space and abundant natural light.',
		coverImage:
			'https://images.unsplash.com/photo-1518005020951-eccb494ad742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwzfHxob3VzZSUyMGV4dGVuc2lvbiUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NDIzMDI5MTl8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Palo Alto, CA',
		squareFeet: 475,
		projectType: 'Home Extension',
	},
	{
		slug: 'in-law-suite-addition-sacramento',
		title: 'Custom In-Law Suite Addition in Sacramento',
		description:
			"Added a 720 sq ft in-law suite featuring a bedroom, full bathroom, kitchenette, and private entrance. The addition was designed for aging-in-place with accessibility features while complementing the existing home's architecture.",
		coverImage:
			'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHw1fHxob3VzZSUyMGV4dGVuc2lvbiUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NDIzMDI5MTl8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Sacramento, CA',
		squareFeet: 720,
		projectType: 'In-Law Suite Addition',
	},
];
/* ------------------------------------------ question ------------------------------------------ */
const questions: QuestionType[] = [
	{
		id: 1,
		question: 'How much does a home addition cost in California?',
		answer:
			'Home addition costs in California typically range from $200 to $500 per square foot, depending on location, materials, and complexity. Second story additions generally cost between $300-500 per square foot due to structural requirements, while single-room additions on the ground floor may cost $200-350 per square foot. Factors affecting price include foundation work, utility relocations, permit costs, and finish quality. Our team provides detailed cost breakdowns during initial consultations after assessing your specific project needs.',
	},
	{
		id: 2,
		question: 'How long does it take to complete a home addition project?',
		answer:
			'The timeline for home addition projects varies based on size and complexity. Typically, a single room addition (300-500 sq ft) takes 2-4 months, while a second story addition may require 4-6 months or longer. The process includes design and engineering (2-4 weeks), permitting (4-12 weeks depending on jurisdiction), construction (8-16 weeks for single room, 12-24 weeks for second story), and finishing work. Weather conditions, material availability, and inspection schedules can also impact timelines.',
	},
	{
		id: 3,
		question: 'Do I need permits for a home addition in California?',
		answer:
			'Yes, all home additions in California require building permits. The permit process typically includes submitting architectural plans, structural engineering calculations, Title 24 energy compliance documentation, and in some cases, additional approvals from homeowners associations or coastal/historical commissions. Our team handles the entire permit application process, including preparing all necessary documentation and coordinating with local building departments to ensure full compliance with California building codes.',
	},
	{
		id: 4,
		question: 'Can I add a second story to any house?',
		answer:
			'Not all homes are suitable for second story additions without significant structural modifications. Factors determining feasibility include the existing foundation capacity, wall construction, soil conditions, and local zoning restrictions. Our structural engineers conduct thorough assessments including foundation evaluation and load calculations to determine if your home can support a second floor. In some cases, foundation reinforcement or other structural upgrades may be necessary before proceeding with a vertical addition.',
	},
	{
		id: 5,
		question:
			'What is the return on investment for a home addition in California?',
		answer:
			"Home additions in California typically provide a 60-80% return on investment, with higher returns in desirable markets like San Francisco and Los Angeles. Master suite additions average 63% ROI, kitchen extensions about 75%, and family room additions around 70%. Second story additions that significantly increase square footage often yield the highest returns, especially in areas with limited lot sizes where expanding outward isn't possible. Beyond immediate financial returns, additions provide valuable living space and can substantially improve quality of life.",
	},
	{
		id: 6,
		question: 'Should I move out during a home addition project?',
		answer:
			"Whether to move out during construction depends on the project scope and your tolerance for disruption. For second story additions or major renovations affecting multiple rooms, temporarily relocating is often recommended due to utility disruptions, dust, noise, and safety concerns. For smaller additions that can be sealed off from living areas, staying may be feasible. We implement containment systems and careful planning to minimize disruption, but larger projects typically impact daily living. We'll discuss living arrangements during our initial consultation based on your specific project.",
	},
];
/* ---------------------------------------- testimonials ---------------------------------------- */
const testimonials: TestimonialType[] = [
	{
		content:
			'Cecilia Home transformed our single-story home with a beautifully designed second floor addition. Mason personally oversaw the architectural planning, creating a seamless design that looks like it was always part of our home. Their home addition specialists ensured everything was structurally sound while maximizing our budget. The new space has completely changed how our family lives!',
		rating: 5.0,
		author: {
			name: 'Sophia Chen',
			city: 'San Francisco',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1573496358961-3c82861ab8f4',
		},
	},
	{
		content:
			"We hired Cecilia Home to design and build a master suite addition, and they exceeded all expectations. Mason's architectural vision created a space that perfectly balanced luxury with practicality. Their home addition team managed every aspect from foundation to finishing touches with remarkable precision. Our new master bedroom and bathroom have added significant value to our property.",
		rating: 4.9,
		author: {
			name: 'Michael Rodriguez',
			city: 'Palo Alto',
			company: 'Property Owner',
			image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
		},
	},
	{
		content:
			"The kitchen and family room addition Mason designed for our California home completely transformed our living space. Cecilia Home's team seamlessly integrated the new construction with our existing house, creating an open, light-filled area that's now our favorite gathering place. Their expertise with home addition permits saved us countless headaches with local building authorities!",
		rating: 4.8,
		author: {
			name: 'Jennifer Park',
			city: 'San Jose',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
		},
	},
	{
		content:
			'Our complex second story home addition was handled masterfully by Mason and the Cecilia Home team. Their structural engineers designed a solution that minimized disruption to our first floor during construction. Their home addition specialists coordinated everything from structural support to roof matching. We now have double the square footage with stunning Bay Area views!',
		rating: 4.8,
		author: {
			name: 'Andrew Thompson',
			city: 'Mountain View',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f',
		},
	},
	{
		content:
			"The in-law suite home addition Cecilia Home created for our property is perfect for our aging parents. Mason thoughtfully designed the space for accessibility while ensuring it complements our home's architecture. Their home addition expertise allowed for a separate entrance that gives everyone privacy, while still feeling connected to the main house. The quality of construction is outstanding.",
		rating: 4.7,
		author: {
			name: 'Lisa Wong',
			city: 'Berkeley',
			company: 'Property Owner',
			image: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b',
		},
	},
	{
		content:
			'Our 800 sq ft home addition project with Mason at Cecilia Home was an excellent investment. Their team helped us design a two-story addition that maximized our narrow lot and seamlessly integrated with our existing California bungalow. Their knowledge of local building codes and home addition permit processes made what could have been a stressful project actually enjoyable.',
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
export default function HomeAdditionPage() {
	return (
		<div>
			<Script {...getJsonLdScript('services-home-addition')} />
			<ServiceHero
				smallText="Your Local Home Addition Experts"
				title="Expand Your Living Space with Expert Home & Room Additions"
				description="Professional home addition services throughout California. From second story additions to master suite extensions, we design and build beautiful, functional spaces that enhance your lifestyle and increase your property value."
				image="/images/home/home-addition.png"
			/>
			<States />

			<ServiceFeatures
				title="Expert Home Addition Services"
				description="Transform your California home with our professional addition and extension services. From full second story additions to master suite extensions, kitchen expansions, and in-law suites, Cecilia Home designs and builds beautiful, functional spaces that enhance your lifestyle and increase your property value."
				features={Features}
				buttonText="Schedule Your Design Consultation"
			/>
			<Steps />

			<ServiceShowcase
				title="Featured Home Addition Projects"
				description="Explore our portfolio of stunning home addition projects throughout California. Each project showcases our architectural design expertise, engineering precision, and commitment to creating beautiful, functional spaces that perfectly complement existing homes."
				buttonText="Get Your Free Consultation"
				serviceProjects={serviceProjects}
			/>
			<ServiceFAQ
				title="Frequently Asked Questions"
				description="Answers to common questions about home additions, second story expansions, room extensions, costs, and timelines in California."
				questions={questions}
			/>
			<ServiceTestimonials testimonials={testimonials} />
			<Trust />
		</div>
	);
}
