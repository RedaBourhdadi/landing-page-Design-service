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
		title: 'COMPREHENSIVE FOUNDATION ASSESSMENTS',
		description:
			"Our structural engineers conduct thorough evaluations of your property's foundation using advanced inspection techniques. We assess all foundation types including concrete slab, pier and beam, and basement foundations for structural integrity and potential issues.",
	},
	{
		title: 'CRACK PATTERN ANALYSIS',
		description:
			'We specialize in analyzing foundation crack patterns to determine their cause and severity. Our experts distinguish between normal settling cracks and those indicating serious structural issues, providing clear documentation of all findings with detailed measurements and photographic evidence.',
	},
	{
		title: 'MOISTURE & DRAINAGE EVALUATION',
		description:
			'Poor drainage and moisture problems are leading causes of foundation damage in California homes. Our inspections include thorough assessment of grading, drainage systems, and moisture patterns around your foundation to identify potential water-related issues affecting structural stability.',
	},
	{
		title: 'PIER & SUPPORT INSPECTION',
		description:
			"For raised foundations, we meticulously examine all support piers, posts, and beams for signs of damage, shifting, or deterioration. Our structural engineers check for proper spacing, adequate sizing, and assess the overall condition of your foundation's support system.",
	},
	{
		title: 'SEISMIC VULNERABILITY ASSESSMENT',
		description:
			'California homes face unique earthquake risks. Our foundation inspections include evaluation of seismic vulnerabilities including cripple wall strength, foundation bolting, and potential liquefaction zones. We provide recommendations for necessary retrofitting to improve earthquake resilience.',
	},
	{
		title: 'DETAILED FOUNDATION REPORTS',
		description:
			'Following inspection, we provide comprehensive reports documenting all findings with clear photographs, diagrams, and expert analysis. Our reports include prioritized repair recommendations, estimated repair costs, and specific action plans to address any identified foundation issues.',
	},
];
/* --------------------------------------------- SEO -------------------------------------------- */
export const metadata = {
	title: 'alifornia Foundation Inspection & Report Services',
	description:
		'Expert California foundation inspections by structural engineers. We identify cracks, settlement, moisture & seismic issues to protect your property value. Detailed reports',
	keywords: [
		'foundation inspection California',
		'structural engineer foundation inspection',
		'home foundation assessment California',
		'foundation crack inspection',
		'foundation problem inspection',
		'foundation settlement inspection',
		'California foundation structural inspection',
		'foundation damage assessment',
		'house foundation evaluation',
		'foundation structural integrity check',
		'foundation shifting inspection',
		'concrete foundation inspection',
		'pier and beam foundation inspection',
		'basement foundation inspection',
		'foundation moisture evaluation',
		'foundation repair assessment',
		'foundation seismic inspection',
		'foundation inspection report',
		'foundation inspection cost California',
		'professional foundation inspection services',
	],

	// Open Graph 数据
	openGraph: {
		title:
			'California Foundation Inspection Experts | Detecting Structural Issues',
		description:
			'Professional foundation inspections by licensed structural engineers. We identify foundation cracks, settlement, moisture damage, and seismic vulnerabilities to protect your California property investment.',
		images: [
			{
				url: 'https://www.ceciliahome.design/images/foundation-inspection.jpg',
				width: 1200,
				height: 630,
				alt: 'California Foundation Inspection',
			},
		],
		locale: 'en_US',
		type: 'website',
		siteName: 'Cecilia Home Design',
	},

	// Twitter Card 元数据
	twitter: {
		card: 'summary_large_image',
		title: 'Expert Foundation Inspection | California Structural Engineers',
		description:
			'Comprehensive foundation assessments by licensed structural engineers. We identify problems early, saving you thousands in costly repairs and ensuring your California home remains structurally sound.',
		images: ['https://www.ceciliahome.design/images/foundation-inspection.jpg'],
	},

	alternates: {
		canonical: 'https://www.ceciliahome.design/services/foundation-inspection',
	},
};

/* ---------------------------------------------- Projects --------------------------------------------- */
const serviceProjects: ServiceProject[] = [
	{
		slug: 'hillside-home-foundation-inspection-los-angeles',
		title: 'Hillside Home Foundation Inspection in Los Angeles',
		description:
			'Conducted a comprehensive foundation inspection for a hillside property experiencing significant settlement issues. Our structural engineers identified improper drainage causing soil erosion beneath the foundation and provided detailed recommendations for drainage improvements and foundation reinforcement.',
		coverImage:
			'https://images.unsplash.com/photo-1549517045-bc93de075e53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGZvdW5kYXRpb24lMjBpbnNwZWN0aW9ufGVufDB8fHx8MTc0MjMwNDExNnww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Los Angeles, CA',
		squareFeet: 3200,
		projectType: 'Hillside Foundation Assessment',
	},
	{
		slug: 'victorian-home-foundation-inspection-san-francisco',
		title: 'Victorian Home Foundation Inspection in San Francisco',
		description:
			"Performed a detailed foundation assessment for a historic Victorian home exhibiting signs of structural stress. Our inspection revealed inadequate foundation bolting and cripple wall bracing, creating significant seismic vulnerability. We provided a prioritized retrofit plan to address these issues while preserving the home's historic character.",
		coverImage:
			'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwzfHxob3VzZSUyMGZvdW5kYXRpb24lMjBpbnNwZWN0aW9ufGVufDB8fHx8MTc0MjMwNDExNnww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'San Francisco, CA',
		squareFeet: 2800,
		projectType: 'Historic Home Foundation Inspection',
	},
	{
		slug: 'commercial-building-foundation-assessment-san-diego',
		title: 'Commercial Building Foundation Assessment in San Diego',
		description:
			'Conducted a thorough structural assessment for a commercial building showing signs of foundation distress. Our team identified significant slab cracking due to improper initial soil compaction and moisture intrusion. We delivered a comprehensive repair strategy that addressed the underlying soil issues while minimizing business disruption.',
		coverImage:
			'https://images.unsplash.com/photo-1486718448742-163732cd1544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwyfHxidWlsZGluZyUyMGZvdW5kYXRpb24lMjBpbnNwZWN0aW9ufGVufDB8fHx8MTc0MjMwNDExNnww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'San Diego, CA',
		squareFeet: 15000,
		projectType: 'Commercial Foundation Inspection',
	},
	{
		slug: 'earthquake-damage-assessment-oakland',
		title: 'Post-Earthquake Foundation Assessment in Oakland',
		description:
			'Performed an emergency foundation evaluation following a significant seismic event. Our structural engineers documented earthquake-related foundation damage, distinguishing between pre-existing issues and earthquake effects for insurance purposes. We provided a detailed recovery plan prioritizing structural safety concerns.',
		coverImage:
			'https://images.unsplash.com/photo-1528893583412-4ec4164fd908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHw1fHxmb3VuZGF0aW9uJTIwZGFtYWdlJTIwY3JhY2tzfGVufDB8fHx8MTc0MjMwNDExNnww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Oakland, CA',
		squareFeet: 2400,
		projectType: 'Seismic Damage Assessment',
	},
	{
		slug: 'pre-purchase-foundation-inspection-sacramento',
		title: 'Pre-Purchase Foundation Inspection in Sacramento',
		description:
			'Conducted a comprehensive pre-purchase foundation inspection for potential homebuyers concerned about possible structural issues. Our detailed assessment revealed significant, previously undisclosed foundation problems that would have cost over $45,000 to repair. Our findings enabled the clients to negotiate a significant price reduction.',
		coverImage:
			'https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHw0fHxob3VzZSUyMGluc3BlY3Rpb24lMjBmb3VuZGF0aW9ufGVufDB8fHx8MTc0MjMwNDExNnww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Sacramento, CA',
		squareFeet: 1850,
		projectType: 'Pre-Purchase Inspection',
	},
	{
		slug: 'multi-unit-foundation-assessment-santa-barbara',
		title: 'Multi-Unit Building Foundation Assessment in Santa Barbara',
		description:
			'Performed a detailed foundation evaluation for a 12-unit apartment complex experiencing differential settlement. Our structural engineers identified inadequate foundation depth and poor soil conditions as primary causes. We developed a phased underpinning strategy that allowed residents to remain in the building during repairs.',
		coverImage:
			'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwzfHxhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwwfHx8fDE3NDIzMDQxMTZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Santa Barbara, CA',
		squareFeet: 24000,
		projectType: 'Multi-Unit Foundation Assessment',
	},
];
/* ------------------------------------------ question ------------------------------------------ */
const questions: QuestionType[] = [
	{
		id: 1,
		question:
			'What are common signs of foundation problems in California homes?',
		answer:
			"Common signs of foundation issues in California properties include: diagonal cracks in walls (especially above doors and windows), doors and windows that stick or don't close properly, visible cracks in the foundation or slab, uneven or sloping floors, gaps between walls and ceiling or floor, exterior brick or stucco cracks, and molding separation. California's unique soil conditions and seismic activity often present as specific crack patterns and settlement issues that our structural engineers are trained to identify and differentiate from normal settling.",
	},
	{
		id: 2,
		question:
			'How much does a professional foundation inspection cost in California?',
		answer:
			'Foundation inspection costs in California typically range from $500-$1,200 for residential properties, depending on home size, foundation type, accessibility, and location. Commercial property inspections generally start at $1,200 and increase based on square footage and complexity. Our comprehensive inspections include not just visual assessments but also moisture readings, level measurements, detailed documentation, and engineering reports. We provide exact pricing during initial consultation based on your specific property details.',
	},
	{
		id: 3,
		question: 'Do all foundation cracks indicate serious structural problems?',
		answer:
			"No, not all foundation cracks indicate serious structural problems. Hairline cracks (less than 1/8 inch wide) are often normal settling cracks, especially in newer homes as concrete cures and settles. However, horizontal cracks, stair-step cracks in masonry, cracks wider than 1/4 inch, or cracks with vertical displacement often indicate significant structural issues requiring prompt attention. Our structural engineers differentiate between cosmetic cracks and those requiring structural repair, saving you from unnecessary repairs while ensuring serious issues aren't overlooked.",
	},
	{
		id: 4,
		question:
			"How does California's seismic activity affect foundation inspections?",
		answer:
			"California's seismic activity significantly impacts our foundation inspection approach. We specifically evaluate seismic vulnerabilities including inadequate foundation bolting, unbraced cripple walls, soft-story conditions, and potential liquefaction zones. Our inspections assess compliance with current California seismic codes and identify retrofitting needs specific to your region's earthquake risk. We provide explicit recommendations for improving your home's earthquake resilience, potentially qualifying you for earthquake insurance discounts through programs like the California Earthquake Authority's Brace + Bolt initiative.",
	},
	{
		id: 5,
		question: 'What qualifications do your foundation inspectors have?',
		answer:
			'Our foundation inspections are conducted exclusively by licensed California Professional Engineers (PE) with structural engineering specialization. Each inspector has a minimum of 10 years of experience specifically assessing California foundations. Our team maintains certifications in advanced foundation assessment methodologies and stays current with California building codes and seismic requirements. Unlike general home inspectors who provide surface-level observations, our structural engineers provide legally recognized professional assessments that can be used for insurance claims, real estate negotiations, and repair planning.',
	},
	{
		id: 6,
		question:
			'When should I schedule a foundation inspection for my California property?',
		answer:
			'You should schedule a foundation inspection: before purchasing a property (especially homes older than 25 years or in hillside areas), when noticing potential foundation problem signs (cracks, sloping floors, sticking doors/windows), after earthquakes or significant weather events, before planning major renovations, if your home lacks modern seismic retrofitting, and as preventative maintenance every 5-10 years for older properties. Early detection of foundation issues typically saves California homeowners thousands in repair costs by addressing problems before they become severe.',
	},
];
/* ---------------------------------------- testimonials ---------------------------------------- */
const testimonials: TestimonialType[] = [
	{
		content:
			'The foundation inspection from Cecilia Home was incredibly thorough. Mason personally led the structural assessment team and identified drainage issues causing foundation settlement that three previous inspectors had missed. Their detailed report included clear photos documenting each problem and provided prioritized repair recommendations that saved our hillside home from potentially catastrophic damage.',
		rating: 5.0,
		author: {
			name: 'Maria Sanchez',
			city: 'Los Angeles',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
		},
	},
	{
		content:
			"We were about to purchase a Victorian home in San Francisco when Mason from Cecilia Home conducted a foundation inspection that revealed significant seismic vulnerabilities not disclosed by the seller. The comprehensive foundation report explained exactly how inadequate retrofitting created risks specific to our neighborhood's soil conditions. Thanks to Cecilia Home's inspection expertise, we negotiated $80,000 off the purchase price to cover necessary repairs.",
		rating: 4.9,
		author: {
			name: 'James Wilson',
			city: 'San Francisco',
			company: 'Home Buyer',
			image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
		},
	},
	{
		content:
			"As a commercial property manager, I needed a reliable foundation inspection for our retail space showing signs of settling. Cecilia Home delivered a remarkably detailed structural assessment that not only identified the problems but provided a phased repair approach. Mason's expertise in commercial foundation systems allowed our tenants to remain open during repairs, saving us significant business interruption costs.",
		rating: 4.8,
		author: {
			name: 'Linda Chang',
			city: 'San Diego',
			company: 'Commercial Property Manager',
			image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
		},
	},
	{
		content:
			"Following an earthquake, we noticed new cracks in our foundation and walls. Mason at Cecilia Home conducted an emergency foundation inspection that clearly documented which damage was earthquake-related for our insurance claim. Their structural engineer provided a prioritized repair plan addressing immediate safety concerns first. Cecilia Home's detailed foundation assessment report was accepted without question by our insurance company.",
		rating: 5.0,
		author: {
			name: 'Thomas Patel',
			city: 'Oakland',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
		},
	},
	{
		content:
			"We almost walked away from our dream home when we noticed foundation cracks during the viewing. Cecilia Home's pre-purchase foundation inspection distinguished between cosmetic settling cracks and actual structural issues. Mason personally reviewed the property's geological conditions and provided a clear explanation of what needed immediate attention versus what could be monitored, giving us the confidence to proceed with the purchase.",
		rating: 4.7,
		author: {
			name: 'Sophia Johnson',
			city: 'Sacramento',
			company: 'Home Buyer',
			image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
		},
	},
	{
		content:
			"As a property investor, I rely on Mason and Cecilia Home's foundation inspections before every multi-unit purchase. Their structural assessment of a Santa Barbara apartment complex identified progressive foundation settlement issues that would have been catastrophic if left unaddressed. Cecilia Home's foundation expertise allowed us to develop an effective remediation strategy while keeping tenants in place, protecting both my investment and their homes.",
		rating: 4.9,
		author: {
			name: 'Daniel Rodriguez',
			city: 'Santa Barbara',
			company: 'Real Estate Investor',
			image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
		},
	},
];

/* ---------------------------------------------- Page --------------------------------------------- */
export default function FoundationInspectionPage() {
	return (
		<div>
			<Script {...getJsonLdScript('services-foundation-inspection')} />
			<ServiceHero
				smallText="Your Local Foundation Inspection Experts"
				title="California Foundation Inspection & Report Services"
				description="Comprehensive foundation assessments by licensed structural engineers. We identify foundation cracks, settlement issues, drainage problems, and seismic vulnerabilities to protect your California property investment."
				image="/images/home/foundation-inspection.webp"
			/>
			<States />

			<ServiceFeatures
				title="Comprehensive Foundation Inspection"
				description="Our specialized foundation inspection services identify structural issues before they become costly problems. Whether for pre-purchase assessment, addressing visible foundation concerns, or post-earthquake evaluation, our California structural engineers deliver expert analysis and actionable recommendations."
				features={Features}
				buttonText="Schedule Foundation Inspection"
			/>
			<Steps />

			<ServiceShowcase
				title="Featured Inspection Projects"
				description="Explore our portfolio of foundation assessments across California. Each case demonstrates our expertise in identifying structural issues, from hillside homes to historic buildings and commercial properties."
				buttonText="Get Foundation Assessment"
				serviceProjects={serviceProjects}
			/>
			<ServiceFAQ
				title="Foundation Inspection FAQs"
				description="Answers to common questions about foundation problems, inspection costs, and structural assessment services in California."
				questions={questions}
			/>
			<ServiceTestimonials testimonials={testimonials} />
			<Trust />
		</div>
	);
}
