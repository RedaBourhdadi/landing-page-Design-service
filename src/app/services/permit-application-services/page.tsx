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
		title: 'COMPREHENSIVE PERMIT PROCESSING',
		description:
			'Our expert team handles the entire permit application process for residential and commercial construction projects throughout California. We manage all documentation, plan submissions, revisions, and communication with local building departments.',
	},
	{
		title: 'PLAN CHECK RESPONSE MANAGEMENT',
		description:
			'We expertly address city comments and correction notices, preparing thorough responses that satisfy regulatory requirements. Our knowledge of California building codes and local regulations expedites the approval process and minimizes delays.',
	},
	{
		title: 'EXPEDITED PERMIT SERVICES',
		description:
			'Access our fast-track permitting options for time-sensitive projects. We utilize our established relationships with building departments and knowledge of expedited processes to secure your permits in the shortest possible timeframe.',
	},
	{
		title: 'ADU & RESIDENTIAL PERMIT SPECIALISTS',
		description:
			'Specialized expertise in securing permits for Accessory Dwelling Units and residential projects. We navigate the complex regulations specific to California ADUs and home construction, ensuring code compliance and smooth approvals.',
	},
	{
		title: 'COMMERCIAL BUILDING PERMIT ASSISTANCE',
		description:
			'From tenant improvements to new commercial construction, our team handles complex commercial permit applications. We coordinate with planning departments, health departments, fire marshals, and other regulatory agencies to secure all necessary approvals.',
	},
	{
		title: 'PERMIT STRATEGY CONSULTATION',
		description:
			'Before you begin your project, our permit strategists analyze your plans and provide guidance on the most efficient approval pathway. We identify potential issues early, recommend modifications to streamline approvals, and develop a comprehensive permit strategy.',
	},
];
/* --------------------------------------------- SEO -------------------------------------------- */
export const metadata = {
	title: 'California Building Permit Application & Approval Experts',
	description:
		'Professional building permit services in California. We handle plan submissions, address city comments, and navigate the approval process for residential and commercial construction projects.',
	keywords: [
		'building permit services California',
		'permit assistance California',
		'residential construction permits California',
		'commercial building permits California',
		'permit application services California',
		'permit processing services California',
		'building permit consultant California',
		'California permit requirements',
		'permit submission services California',
		'permit management services California',
		'help with construction permits California',
		'fast track permitting California',
		'expedited permit services California',
		'ADU permit assistance California',
		'California building codes assistance',
		'planning permit services California',
		'building permit services Los Angeles',
		'construction permit help San Francisco',
	],

	// Open Graph 数据
	openGraph: {
		title: 'California Building Permit Experts | Streamlining Approval Process',
		description:
			'Simplify your building permit process in California. Our experts handle plan submissions, respond to city comments, and navigate complex regulations to secure permit approvals quickly and efficiently.',
		images: [
			{
				url: 'https://www.ceciliahome.design/images/building-permit-process.jpg',
				width: 1200,
				height: 630,
				alt: 'California Building Permit Approval Process',
			},
		],
		locale: 'en_US',
		type: 'website',
		siteName: 'Cecilia Home Design',
	},

	// Twitter Card 元数据
	twitter: {
		card: 'summary_large_image',
		title: 'Expert Building Permit Services | California Approval Specialists',
		description:
			'From initial plan submission to final approval, we navigate the complex California permit process. Our experts handle city comments and requirements for residential and commercial projects.',
		images: [
			'https://www.ceciliahome.design/images/building-permit-process.jpg',
		],
	},

	alternates: {
		canonical: 'https://www.ceciliahome.design/services/building-permits',
	},
};

/* ---------------------------------------------- Projects --------------------------------------------- */
const serviceProjects: ServiceProject[] = [
	{
		slug: 'residential-adu-permit-san-francisco',
		title: 'ADU Permit Approval in San Francisco',
		description:
			"Successfully navigated San Francisco's complex ADU permitting process for a 650 sq ft backyard cottage. Our team managed all documentation, addressed planning department concerns, and secured approval in 4 months despite initial zoning challenges.",
		coverImage:
			'https://images.unsplash.com/photo-1527576539890-dfa815648363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxibHVlcHJpbnQlMjBhcmNoaXRlY3R1cmUlMjBkb2N1bWVudHMlMjBwZXJtaXR8ZW58MHx8fHwxNzQyMzA0MTAyfDA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'San Francisco, CA',
		squareFeet: 650,
		projectType: 'Residential ADU Permit',
	},
	{
		slug: 'commercial-tenant-improvement-los-angeles',
		title: 'Commercial Tenant Improvement in Los Angeles',
		description:
			'Managed the permit process for a 12,000 sq ft commercial office renovation in downtown Los Angeles. Our team coordinated with multiple departments, expedited the plan check process, and secured all approvals within 10 weeks, allowing construction to begin ahead of schedule.',
		coverImage:
			'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjBibHVlcHJpbnRzJTIwY29uc3RydWN0aW9uJTIwcGVybWl0c3xlbnwwfHx8fDE3NDIzMDQwOTR8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Los Angeles, CA',
		squareFeet: 12000,
		projectType: 'Commercial Tenant Improvement Permit',
	},
	{
		slug: 'second-story-addition-san-diego',
		title: 'Second Story Addition in San Diego',
		description:
			"Secured permits for a 1,200 sq ft second story home addition in San Diego's coastal zone. Our team successfully navigated both Coastal Commission requirements and local building codes, managing multiple rounds of plan check corrections to achieve final approval.",
		coverImage:
			'https://images.unsplash.com/photo-1489514354504-1653aa90e34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwyfHxhcmNoaXRlY3QlMjBibHVlcHJpbnRzJTIwY29uc3RydWN0aW9uJTIwcGVybWl0c3xlbnwwfHx8fDE3NDIzMDQwOTR8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'San Diego, CA',
		squareFeet: 1200,
		projectType: 'Residential Addition Permit',
	},
	{
		slug: 'expedited-restaurant-permit-oakland',
		title: 'Expedited Restaurant Permit in Oakland',
		description:
			'Fast-tracked permits for a new restaurant in Oakland using our expedited services. Our team coordinated with planning, building, health, and fire departments simultaneously, reducing the typical 6-month timeline to just 10 weeks for complete permit approval.',
		coverImage:
			'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnQlMjBkZXNrJTIwcGFwZXJ3b3JrfGVufDB8fHx8MTc0MjMwNDEwN3ww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Oakland, CA',
		squareFeet: 2800,
		projectType: 'Commercial Restaurant Permit',
	},
	{
		slug: 'multi-family-housing-permit-palo-alto',
		title: 'Multi-Family Housing Development in Palo Alto',
		description:
			'Managed the complex permitting process for a 24-unit multi-family residential development in Palo Alto. Our team navigated strict zoning requirements, coordinated environmental reviews, and secured all necessary approvals despite significant initial planning challenges.',
		coverImage:
			'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHw0fHxhcmNoaXRlY3QlMjBibHVlcHJpbnRzJTIwY29uc3RydWN0aW9uJTIwcGVybWl0c3xlbnwwfHx8fDE3NDIzMDQwOTR8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Palo Alto, CA',
		squareFeet: 28500,
		projectType: 'Multi-Family Residential Permit',
	},
	{
		slug: 'historic-building-renovation-sacramento',
		title: 'Historic Building Renovation in Sacramento',
		description:
			"Successfully secured permits for renovating a historic commercial building in Sacramento's downtown district. Our team coordinated with historic preservation officers, building department officials, and accessibility specialists to obtain all necessary approvals while preserving the building's historic character.",
		coverImage:
			'https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHw1fHxhcmNoaXRlY3QlMjBibHVlcHJpbnRzJTIwY29uc3RydWN0aW9uJTIwcGVybWl0c3xlbnwwfHx8fDE3NDIzMDQwOTR8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Sacramento, CA',
		squareFeet: 18500,
		projectType: 'Historic Building Permit',
	},
];
/* ------------------------------------------ question ------------------------------------------ */
const questions: QuestionType[] = [
	{
		id: 1,
		question: 'What types of building permits do you handle in California?',
		answer:
			'We manage permit applications for all construction project types throughout California, including: residential new construction, home additions and remodels, ADUs (Accessory Dwelling Units), multi-family residential developments, commercial new construction, tenant improvements, restaurant and retail establishments, mixed-use developments, industrial facilities, and historic building renovations. Our team is familiar with the specific requirements for each project type and jurisdiction across California.',
	},
	{
		id: 2,
		question: 'How long does the permit application process typically take?',
		answer:
			'Permit timelines vary significantly based on project type, location, and complexity. In California, residential permits generally take 2-8 weeks, while commercial permits may take 3-6 months. Factors affecting timeline include jurisdiction (San Francisco and coastal areas typically take longer), project complexity, completeness of initial submission, and current department workloads. Our expedited services can potentially reduce these timelines by 30-50% in many jurisdictions.',
	},
	{
		id: 3,
		question:
			'What information do I need to provide for permit application services?',
		answer:
			"To initiate our permit application services, we typically need: complete architectural and engineering plans (structural, mechanical, electrical, plumbing as applicable), project specifications, property information (APN, zoning), contractor information if available, project description and scope of work, and any previous correspondence with building departments. For specific project types like ADUs or commercial developments, additional documentation may be required which we'll outline during our initial consultation.",
	},
	{
		id: 4,
		question: 'How do you handle plan check corrections and city comments?',
		answer:
			'Our process for handling plan check corrections involves: thoroughly reviewing all comments from building officials, consulting with your design team on required modifications, preparing comprehensive written responses addressing each comment, coordinating plan revisions with architects and engineers, and submitting revised plans and responses within optimal timeframes. Our in-depth knowledge of California building codes and relationships with department officials allows us to effectively negotiate and resolve complex correction issues.',
	},
	{
		id: 5,
		question: 'What is the cost for permit application services in California?',
		answer:
			'Our permit application service fees typically range from $1,500-$8,000 for residential projects and $3,500-$15,000+ for commercial projects, depending on scope, complexity, and location. These fees cover initial submission, plan check response management, coordination with departments, and permit processing. Actual permit fees paid to jurisdictions are additional and vary by location and project valuation. We provide detailed fee estimates during our initial consultation based on your specific project parameters.',
	},
	{
		id: 6,
		question:
			'Do you offer expedited permit services in all California jurisdictions?',
		answer:
			"We offer expedited permit services in most major California jurisdictions including Los Angeles, San Francisco, San Diego, Oakland, Sacramento, and many others. However, expedited options vary by location as some jurisdictions have official accelerated programs while others require strategic approaches to expedite processing. During our consultation, we'll outline the specific expedited options available for your project location and type, including potential timelines and additional costs.",
	},
];
/* ---------------------------------------- testimonials ---------------------------------------- */
const testimonials: TestimonialType[] = [
	{
		content:
			'Cecilia Home secured our San Francisco permit in just 3 weeks—when contractors quoted 6 months! Their expertise saved us from costly redesigns and expedited our timeline significantly.',
		rating: 4.9,
		author: {
			name: 'Wei Zhang',
			city: 'San Francisco',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1573496358961-3c82861ab8f4',
		},
	},
	{
		content:
			"Mason's strategic approach cut our Los Angeles commercial renovation approval from 4 months to 6 weeks. Their multi-agency coordination prevented delays and proved invaluable.",
		rating: 5.0,
		author: {
			name: 'Miguel Hernandez',
			city: 'Los Angeles',
			company: 'Commercial Property Developer',
			image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
		},
	},
	{
		content:
			'After months of struggles with our home addition permit, Mason identified and resolved all issues within days. Their coastal zone expertise fast-tracked our approval.',
		rating: 4.8,
		author: {
			name: 'Sophia Lin',
			city: 'Oakland',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
		},
	},
	{
		content:
			'Cecilia Home secured our restaurant approvals in 5 weeks instead of 4-6 months. Their food service expertise saved our opening timeline and budget.',
		rating: 4.9,
		author: {
			name: 'James Wilson',
			city: 'Berkeley',
			company: 'Restaurant Owner',
			image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f',
		},
	},
	{
		content:
			"Our multi-family development secured permits in 7 weeks instead of 6-8 months thanks to Mason's personal case presentation and strategic agency coordination.",
		rating: 4.7,
		author: {
			name: 'Aisha Johnson',
			city: 'San Jose',
			company: 'Residential Developer',
			image: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b',
		},
	},
	{
		content:
			"Cecilia Home's expertise in historic preservation secured permits for our building in 4 weeks instead of 3-4 months while preserving our architectural vision.",
		rating: 5.0,
		author: {
			name: 'David Chen',
			city: 'Sacramento',
			company: 'Property Investor',
			image: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6',
		},
	},
];

/* ---------------------------------------------- Page --------------------------------------------- */
export default function PermitApplicationServicesPage() {
	return (
		<div>
			<Script {...getJsonLdScript('services-permit')} />
			<ServiceHero
				smallText="Your Local Building Permit Specialists"
				title="Get Your Building Permit Approved in California"
				description="Professional permit application services throughout California. We handle plan submissions, address city comments, and navigate the complex approval process for residential and commercial construction projects."
				image="/images/home/permit-services.jpg"
			/>
			<States />

			<ServiceFeatures
				title="Expert Building Permit Services"
				description="Navigate California's complex permitting landscape with our specialized application and processing services. From residential ADUs to large commercial developments, our team secures approvals efficiently while minimizing delays and complications throughout the process."
				features={Features}
				buttonText="Schedule Permit Consultation"
			/>
			<Steps />

			<ServiceShowcase
				title="Featured Permit Projects"
				description="Explore our portfolio of successful permit applications throughout California. Each project demonstrates our expertise in navigating complex building regulations, addressing plan check corrections, and securing timely approvals for diverse construction projects."
				buttonText="Get Your Permit Strategy"
				serviceProjects={serviceProjects}
			/>
			<ServiceFAQ
				title="Frequently Asked Questions"
				description="Answers to common questions about building permits, application processes, timelines, and costs in California."
				questions={questions}
			/>
			<ServiceTestimonials testimonials={testimonials} />
			<Trust />
		</div>
	);
}
