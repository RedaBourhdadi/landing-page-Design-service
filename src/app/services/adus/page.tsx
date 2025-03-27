import { States } from "@/components/common/states";
import Steps from "@/components/common/steps";
import { Trust } from "@/components/common/trust";
import { ServiceFeatures } from "@/components/services/service-features";
import ServiceFAQ, { QuestionType } from "@/components/services/service-fqa";
import { ServiceHero } from "@/components/services/service-hero";
import {
  ServiceProject,
  ServiceShowcase,
} from "@/components/services/service-showcase";
import ServiceTestimonials, {
  TestimonialType,
} from "@/components/services/service-testimonials";
import { getJsonLdScript } from "@/data/json-ld";
import Script from "next/script";

/* ---------------------------------------------- Features --------------------------------------------- */
const Features = [
  {
    title: "MAXIMIZE PROPERTY VALUE",
    description:
      "Adding an ADU can significantly increase your property value in California's competitive real estate market. Invest in your future with a smart, value-added home improvement.",
  },
  {
    title: "GENERATE RENTAL INCOME",
    description:
      "Turn your backyard into a revenue source. An ADU provides an excellent opportunity to earn consistent rental income in high-demand California locations.",
  },
  {
    title: "EXPAND LIVING SPACE",
    description:
      "Need more room for family, guests, or a home office? An ADU offers flexible space solutions to adapt to your evolving needs without moving.",
  },
  {
    title: "STREAMLINED PERMIT PROCESS",
    description:
      "Navigating California ADU permits can be complex. We simplify the process, leveraging our expertise to ensure a smooth and efficient approval.",
  },
  {
    title: "CUSTOMIZED DESIGN",
    description:
      "Your ADU should reflect your style and needs. We offer personalized design services to create an ADU that perfectly complements your property and lifestyle.",
  },
  {
    title: "EXPERT LOCAL GUIDANCE",
    description:
      "Benefit from our deep understanding of California ADU regulations and construction practices. We ensure your project is compliant and successful from start to finish.",
  },
];
/* ---------------------------------------------- Projects --------------------------------------------- */
const serviceProjects: ServiceProject[] = [
  {
    slug: "modern-backyard-adu-san-francisco",
    title: "Modern Backyard ADU in San Francisco",
    description:
      "A contemporary 650 sq ft detached ADU with high ceilings, abundant natural light, and a space-efficient open floor plan.",
    coverImage:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbiUyMGZyYW1pbmd8ZW58MHx8fHwxNzQxNzcxMDYyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    location: "San Francisco, CA",
    squareFeet: 650,
    projectType: "Detached ADU",
  },
  {
    slug: "garage-conversion-adu-los-angeles",
    title: "Stylish Garage Conversion ADU in Los Angeles",
    description:
      "A 480 sq ft garage conversion transformed into a modern living space with custom storage solutions and high-end finishes.",
    coverImage:
      "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBBRFUlMjBhY2Nlc3NvcnklMjBkd2VsbGluZyUyMHVuaXQlMjBkZXNpZ258ZW58MHx8fHwxNzQxNzcxMDQzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    location: "Los Angeles, CA",
    squareFeet: 480,
    projectType: "Garage Conversion",
  },
  {
    slug: "attached-adu-san-diego",
    title: "Seamless Attached ADU in San Diego",
    description:
      "An 800 sq ft attached ADU featuring a private entrance, one bedroom, and an expansive living area with indoor-outdoor flow.",
    coverImage:
      "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmFsJTIwZW5naW5lZXJpbmclMjBmb3VuZGF0aW9uJTIwcmVwYWlyfGVufDB8fHx8MTc0MTc3MTA1MHww&ixlib=rb-4.0.3&q=80&w=1080",
    location: "San Diego, CA",
    squareFeet: 800,
    projectType: "Attached ADU",
  },
  {
    slug: "junior-adu-oakland",
    title: "Compact Junior ADU in Oakland",
    description:
      "A 400 sq ft junior ADU within the main house footprint, featuring efficient design and multi-functional furniture.",
    coverImage:
      "https://images.unsplash.com/photo-1481026469463-66327c86e544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMHBlcm1pdCUyMGFwcGxpY2F0aW9uJTIwcHJvY2Vzc3xlbnwwfHx8fDE3NDE3NzEwNTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
    location: "Oakland, CA",
    squareFeet: 400,
    projectType: "Junior ADU",
  },
  {
    slug: "luxury-detached-adu-palo-alto",
    title: "Luxury Detached ADU in Palo Alto",
    description:
      "A high-end 750 sq ft detached ADU with premium fixtures, smart home technology, and sustainable building materials.",
    coverImage:
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVtb2RlbGluZyUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fHx8MTc0MTc3MTA0N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    location: "Palo Alto, CA",
    squareFeet: 750,
    projectType: "Detached ADU",
  },
  {
    slug: "mid-century-adu-sacramento",
    title: "Mid-Century Modern ADU in Sacramento",
    description:
      "A 600 sq ft detached ADU inspired by mid-century design with clean lines, large windows, and indoor-outdoor living spaces.",
    coverImage:
      "https://images.unsplash.com/photo-1542733819-2b9351e80d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcmVzdGF1cmFudCUyMGRlc2lnbiUyMGludGVyaW9yfGVufDB8fHx8MTc0MTc3MTA2Nnww&ixlib=rb-4.0.3&q=80&w=1080",
    location: "Sacramento, CA",
    squareFeet: 600,
    projectType: "Detached ADU",
  },
];
/* ------------------------------------------ SEO ------------------------------------------ */
export const metadata = {
  title: "ADU Design & Permits California | Accessory Dwelling Unit Plans",
  description:
    "Expert California ADU design services with pre-approved plans, permit assistance, and construction guidance. Learn how to build an ADU and maximize property value in California.",
  keywords: [
    "ADU California",
    "accessory dwelling unit California",
    "ADU plans California",
    "ADU design California",
    "pre-approved ADU plans California",
    "ADU floor plans California",
    "ADU builders California",
    "ADU permit California",
    "cost to build ADU California",
    "ADU regulations California",
    "how to build an ADU in California",
    "cost of ADU design in California",
    "luxury ADU design Los Angeles",
    "ADU construction California",
  ],

  // Open Graph 数据 - 优化社交媒体分享
  openGraph: {
    title: "California ADU Design & Plans | Accessory Dwelling Units Experts",
    description:
      "California ADU experts: custom designs to permit approval. Get pre-approved plans, cost guidance & regulatory support for accessory dwelling units. Free consultation",
    images: [
      {
        url: "https://www.localhost.com/images/adu-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Custom ADU Designs in California",
      },
    ],
    locale: "en_US",
    type: "website",
    siteName: "Cecilia Home",
  },

  // Twitter Card 元数据
  twitter: {
    card: "summary_large_image",
    title: "California ADU Design & Floor Plans | Permit Experts",
    description:
      "Find out how to build an ADU in California with our expert design and permit services. Pre-approved plans, regulations assistance, and cost guidance available.",
    images: ["https://www.localhost.com/images/adu-showcase.jpg"],
  },

  alternates: {
    canonical: "https://www.localhost.com/services/adu",
  },
};
/* ------------------------------------------ question ------------------------------------------ */
const questions: QuestionType[] = [
  {
    id: 1,
    question: "What is an Accessory Dwelling Unit (ADU)?",
    answer:
      "An Accessory Dwelling Unit (ADU) is a secondary housing unit on a single-family residential lot. It has its own kitchen, bathroom, and sleeping area, and can be attached to or detached from the main house. ADUs are also known as granny flats, in-law suites, or backyard cottages.",
  },
  {
    id: 2,
    question: "Why should I consider building an ADU?",
    answer:
      "Building an ADU can increase your property value, generate rental income, provide housing for family members, or offer flexible living space. It&apos;s a smart investment in California&apos;s competitive housing market.",
  },
  {
    id: 3,
    question: "What are the typical costs of designing and building an ADU?",
    answer:
      "ADU costs vary widely depending on size, complexity, finishes, and location. Design and permit fees can range from $5,000 to $15,000+, and construction costs can range from $100,000 to $300,000+. We provide detailed cost breakdowns and transparent pricing during our consultation.",
  },
  {
    id: 4,
    question: "How long does it take to design and build an ADU?",
    answer:
      "The timeline for an ADU project depends on design complexity, permit processing times, and construction duration. Design and permitting can take 2-6 months, and construction can take 4-9 months. We provide estimated timelines during the planning phase and keep you updated throughout the project.",
  },
  {
    id: 5,
    question: "What permits are required for ADU construction in California?",
    answer:
      "ADU construction requires building permits, and may also involve planning, zoning, and utility permits depending on local regulations. We handle the entire permit application process, ensuring compliance and a smooth approval.",
  },
];
/* ---------------------------------------- testimonials ---------------------------------------- */
const testimonials: TestimonialType[] = [
  {
    content:
      "Working with Mason on our ADU project was truly transformative. His expertise in California ADU regulations and Cecilia Home&apos;s detailed design process resulted in a perfect space that maximizes our property value. Their ability to navigate the complex permit process saved us countless hours and potential headaches.",
    rating: 5.0,
    author: {
      name: "Michael Rodriguez",
      city: "Palo Alto",
      company: "Property Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
  },
  {
    content:
      "Cecilia Home designed our backyard ADU with remarkable attention to detail. From the initial consultation to final inspection, Mason and his team were professional and thorough. Our 600 sq ft ADU now serves as a beautiful home office and guest suite that perfectly complements our main residence.",
    rating: 4.9,
    author: {
      name: "Emily Chen",
      city: "Fremont",
      company: "Homeowner",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b",
    },
  },
  {
    content:
      "As a first-time ADU investor, I was nervous about the process. Mason at Cecilia Home walked me through every step, from ADU site placement to maximizing rental potential. Their 3D renderings helped me visualize the final product before breaking ground. The finished ADU now generates substantial rental income.",
    rating: 4.8,
    author: {
      name: "James Wilson",
      city: "San Jose",
      company: "Investment Property Owner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  },
  {
    content:
      "We needed an ADU for my aging parents that was both accessible and beautiful. Cecilia Home delivered beyond our expectations. Their expertise in California ADU regulations allowed for maximum square footage while Mason's design incorporated subtle accessibility features that don't look institutional. The ADU feels like a natural extension of our home.",
    rating: 5.0,
    author: {
      name: "Sophia Martinez",
      city: "Berkeley",
      company: "Family Homeowner",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
  },
  {
    content:
      "Converting our garage into an ADU seemed impossible until we consulted with Mason at Cecilia Home. Their creative approach to California ADU conversions maximized our limited space while maintaining parking. The permitting process was handled entirely by their team, making what could have been stressful completely seamless.",
    rating: 4.7,
    author: {
      name: "Daniel Park",
      city: "Oakland",
      company: "Urban Homeowner",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c",
    },
  },
  {
    content:
      "Our hillside property presented unique challenges for ADU construction. Cecilia Home's structural expertise made our dream ADU possible. Mason's innovative design integrated the ADU beautifully with the natural landscape while ensuring structural integrity. The finished ADU has become the highlight of our property - guests can't believe the views!",
    rating: 4.9,
    author: {
      name: "Rebecca Johnson",
      city: "Mill Valley",
      company: "Luxury Property Owner",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    },
  },
];
/* ---------------------------------------------- Page --------------------------------------------- */
export default function ADUsPage() {
  return (
    <div>
      <Script {...getJsonLdScript("services-adus")} />
      <ServiceHero
        smallText="Your Local Design & Engineering Experts"
        title="California Expert ADU Design And Engineering"
        description="Expand your living space with our specialized ADU design and
							engineering services in California. We manage permits, plans, and
							construction to bring your ADU vision to life."
        image="/images/home/adu-design.jpg"
      />
      <States />

      <ServiceFeatures
        title="Why You Need an ADU"
        description="Unlock the potential of your California property with a
				custom-designed Accessory Dwelling Unit (ADU). Cecilia Home provides
				expert ADU design and engineering services, making it easier than
				ever to expand your living space or generate rental income."
        features={Features}
        buttonText="Get Your ADU Solution"
      />
      <Steps />

      <ServiceShowcase
        title="Featured ADU Projects"
        description="Explore our recently completed ADU projects throughout California. Each design showcases our dedication to quality, functionality, and aesthetic excellence."
        buttonText="Get A Free ADU Template"
        serviceProjects={serviceProjects}
      />
      <ServiceFAQ
        title="Frequently Asked Questions"
        description="Answers to common questions about ADUs, design, permits, and more."
        questions={questions}
      />
      <ServiceTestimonials testimonials={testimonials} />
      <Trust />
    </div>
  );
}
