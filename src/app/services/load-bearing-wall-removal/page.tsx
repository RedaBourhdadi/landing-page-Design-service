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
    title: "STRUCTURAL ENGINEERING EXPERTISE",
    description:
      "Our licensed structural engineers perform thorough assessments to determine the safest and most effective way to remove load-bearing walls while maintaining your home's structural integrity with proper beam support systems.",
  },
  {
    title: "OPEN CONCEPT KITCHEN TRANSFORMATION",
    description:
      "Create a modern, spacious kitchen by removing dividing walls. We specialize in converting separated kitchen and living spaces into beautiful open concept designs that improve flow and natural light.",
  },
  {
    title: "COMPREHENSIVE PERMIT MANAGEMENT",
    description:
      "Navigate California's permitting requirements with ease. Our team handles all documentation, structural calculations, and permit applications, ensuring your wall removal project is fully compliant with local building codes.",
  },
  {
    title: "LOAD-BEARING BEAM INSTALLATION",
    description:
      "Expert installation of support beams to replace load-bearing walls. We use high-quality materials and precise engineering to ensure your home remains structurally sound while creating your desired open space.",
  },
  {
    title: "MINIMAL DISRUPTION CONSTRUCTION",
    description:
      "Our specialized techniques minimize dust, noise, and disruption during structural wall removal. We implement careful planning and protective measures to keep your home livable throughout the construction process.",
  },
  {
    title: "COMPLETE FINISHING SERVICES",
    description:
      "From drywall and electrical to flooring and painting, we provide comprehensive finishing services after wall removal. Enjoy a seamless transition with perfectly matched materials and finishes for a polished final result.",
  },
];
/* --------------------------------------------- SEO -------------------------------------------- */
export const metadata = {
  title:
    "Load-Bearing & Structural Wall Removal California | Open Kitchen Experts",
  description:
    "Professional structural and load-bearing wall removal in California. Transform confined spaces into open concept kitchens with licensed engineers, permits, and safe beam installation. Free consultation.",
  keywords: [
    "remove load-bearing wall California",
    "load-bearing wall removal California",
    "structural wall removal California",
    "cost to remove load-bearing wall California",
    "structural engineer for load-bearing wall removal California",
    "structural wall demolition California",
    "permit for load-bearing wall removal California",
    "open concept kitchen California",
    "bearing wall removal California",
    "load-bearing beam installation California",
    "replacing structural wall with beam California",
    "replacing load-bearing wall with beam California",
    "load-bearing wall to open kitchen California",
    "structural support for wall removal California",
    "structural assessment for wall removal California",
    "how much does it cost to remove a structural wall in California",
    "find a structural engineer for wall removal near me in California",
  ],

  // Open Graph 数据
  openGraph: {
    title:
      "Load-Bearing Wall & Structural Removal | California Open Kitchen Design",
    description:
      "Expert structural and load-bearing wall removal services California. We specialize in converting divided spaces into stunning open concept kitchens with proper engineering and permit compliance.",
    images: [
      {
        url: "https://www.localhost.com/images/structural-wall-to-open-kitchen.jpg",
        width: 1200,
        height: 630,
        alt: "Before and After: Structural Wall to Open Concept Kitchen Transformation",
      },
    ],
    locale: "en_US",
    type: "website",
    siteName: "Cecilia Home",
  },

  // Twitter Card 元数据
  twitter: {
    card: "summary_large_image",
    title:
      "California Structural & Load-Bearing Wall Removal for Open Kitchens",
    description:
      "Transform your home with expert structural wall removal. Our engineers safely convert support walls into beautiful open concept kitchens while ensuring structural integrity.",
    images: [
      "https://www.localhost.com/images/structural-wall-to-open-kitchen.jpg",
    ],
  },

  alternates: {
    canonical: "https://www.localhost.com/services/load-bearing-wall-removal",
  },
};

/* ---------------------------------------------- Projects --------------------------------------------- */
const serviceProjects: ServiceProject[] = [
  {
    slug: "open-concept-kitchen-san-francisco",
    title: "Open Concept Kitchen Transformation in San Francisco",
    description:
      "Removed a load-bearing wall between kitchen and living room, installing an engineered beam system to create a spacious, light-filled open concept area with improved flow and functionality.",
    coverImage:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwyfHxzdHJ1Y3R1cmFsJTIwYmVhbSUyMGluc3RhbGxhdGlvbiUyMGtpdGNoZW58ZW58MHx8fHwxNzQyMzAyMzAyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    location: "San Francisco, CA",
    squareFeet: 450,
    projectType: "Load-Bearing Wall Removal",
  },
  {
    slug: "structural-beam-installation-los-angeles",
    title: "Structural Beam Installation in Los Angeles Home",
    description:
      "Designed and installed a hidden steel beam system to replace multiple load-bearing walls, creating an expansive entertaining space combining kitchen, dining, and living areas while maintaining structural integrity.",
    coverImage:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmFsJTIwYmVhbSUyMGluc3RhbGxhdGlvbiUyMGtpdGNoZW58ZW58MHx8fHwxNzQyMzAyMzAyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    location: "Los Angeles, CA",
    squareFeet: 650,
    projectType: "Multi-Wall Structural Renovation",
  },
  {
    slug: "kitchen-living-room-wall-removal-san-diego",
    title: "Kitchen-Living Room Wall Removal in San Diego",
    description:
      "Completed comprehensive structural modifications to remove a main load-bearing wall, creating a stunning open floor plan with unobstructed sightlines throughout the main living space.",
    coverImage:
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxvcGVuJTIwY29uY2VwdCUyMGtpdGNoZW4lMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc0MjMwMjI5OXww&ixlib=rb-4.0.3&q=80&w=1080",
    location: "San Diego, CA",
    squareFeet: 380,
    projectType: "Load-Bearing Wall Removal",
  },
  {
    slug: "structural-renovation-oakland",
    title: "Comprehensive Structural Renovation in Oakland",
    description:
      "Engineered and executed the removal of multiple structural walls in a historic Oakland home, installing custom-designed steel beams to create an open floor plan while preserving architectural character.",
    coverImage:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwzfHxzdHJ1Y3R1cmFsJTIwYmVhbSUyMGluc3RhbGxhdGlvbiUyMGtpdGNoZW58ZW58MHx8fHwxNzQyMzAyMzAyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    location: "Oakland, CA",
    squareFeet: 520,
    projectType: "Historic Home Structural Modification",
  },
  {
    slug: "modern-open-concept-palo-alto",
    title: "Modern Open Concept Design in Palo Alto",
    description:
      "Transformed a compartmentalized floor plan by removing two load-bearing walls and installing an engineered support system, creating a contemporary open concept space with abundant natural light.",
    coverImage:
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwyfHxvcGVuJTIwY29uY2VwdCUyMGtpdGNoZW4lMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc0MjMwMjI5OXww&ixlib=rb-4.0.3&q=80&w=1080",
    location: "Palo Alto, CA",
    squareFeet: 600,
    projectType: "Multi-Wall Removal",
  },
  {
    slug: "load-bearing-beam-sacramento",
    title: "Exposed Beam Installation in Sacramento",
    description:
      "Designed and implemented a decorative exposed beam solution to replace a load-bearing wall, creating an architectural feature while opening up the living space in this Sacramento home.",
    coverImage:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHw1fHxzdHJ1Y3R1cmFsJTIwYmVhbSUyMGluc3RhbGxhdGlvbiUyMGtpdGNoZW58ZW58MHx8fHwxNzQyMzAyMzAyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    location: "Sacramento, CA",
    squareFeet: 420,
    projectType: "Decorative Structural Beam Installation",
  },
];
/* ------------------------------------------ question ------------------------------------------ */
const questions: QuestionType[] = [
  {
    id: 1,
    question: "How do I know if a wall is load-bearing?",
    answer:
      "Load-bearing walls typically run perpendicular to floor joists and often connect to foundation walls. However, the only definitive way to determine if a wall is load-bearing is through a professional structural assessment. Our structural engineers will evaluate your home's construction, examine blueprints when available, and may need to inspect the attic or basement to verify the wall's structural role.",
  },
  {
    id: 2,
    question: "What is the process for removing a load-bearing wall?",
    answer:
      "The process begins with a structural assessment and engineering plan. We then obtain necessary permits, install temporary supports, remove the wall carefully, install a properly sized beam (steel, engineered wood, or laminated veneer lumber), and finish with restoration work including drywall, electrical adjustments, flooring repairs, and painting. The entire process typically takes 2-4 weeks depending on complexity and scope.",
  },
  {
    id: 3,
    question:
      "What is the average cost to remove a load-bearing wall in California?",
    answer:
      "In California, removing a load-bearing wall typically costs between $8,000 and $25,000, depending on the wall's length, the structural requirements, finishing details, and location-specific factors. Complex projects involving multiple walls, high ceilings, or second-story loads may cost more. We provide detailed cost breakdowns during our initial consultation after assessing your specific project needs.",
  },
  {
    id: 4,
    question: "Do I need permits to remove a load-bearing wall?",
    answer:
      "Yes, removing a load-bearing wall always requires permits in California. The permit process typically includes submitting structural engineering plans, load calculations, and specific details about the replacement support system. Our team handles the entire permit application process, including preparing all necessary documentation and coordinating with local building departments to ensure full compliance with building codes.",
  },
  {
    id: 5,
    question: "Will removing a load-bearing wall affect my home's value?",
    answer:
      "When properly executed with appropriate engineering and permits, removing load-bearing walls to create open concept spaces typically increases a home's value. Open layouts are highly desirable in the California real estate market, especially for kitchen/living areas. However, the quality of work is crucial—improperly removed walls can significantly reduce property value and create safety hazards. Our professional approach ensures your renovation adds value to your home.",
  },
];
/* ---------------------------------------- testimonials ---------------------------------------- */
const testimonials: TestimonialType[] = [
  {
    content:
      "Cecilia Home transformed our compartmentalized layout into a beautiful open concept kitchen and living area. Their structural engineers designed the perfect beam solution, and the construction team executed flawlessly. The entire process was smooth and professional!",
    rating: 4.9,
    author: {
      name: "Sarah Chen",
      city: "San Francisco",
      company: "Homeowner",
      image: "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4",
    },
  },
  {
    content:
      "We were nervous about removing the main wall in our home, but Cecilia Home's team provided exceptional guidance from engineering to completion. Their attention to structural details was impressive, and our newly opened space has completely transformed how we live in our home!",
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
      "The load-bearing wall removal Cecilia Home completed for us was life-changing. Our kitchen now flows beautifully into our living room, and the hidden beam system they designed preserved our ceiling height. Their permit expertise saved us countless headaches!",
    rating: 4.7,
    author: {
      name: "Jennifer Park",
      city: "San Jose",
      company: "Homeowner",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    },
  },
  {
    content:
      "We hired Cecilia Home to remove two load-bearing walls creating an open concept main floor, and they delivered beyond our expectations. Their structural engineering was impeccable, and the finished space looks like it was always meant to be open. Highly recommend!",
    rating: 4.8,
    author: {
      name: "David Thompson",
      city: "Mountain View",
      company: "Homeowner",
      image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f",
    },
  },
  {
    content:
      "The structural beam installation by Cecilia Home was flawless. They replaced our load-bearing wall with an exposed beam that became a beautiful architectural feature. Their attention to both structural integrity and aesthetics was impressive.",
    rating: 4.6,
    author: {
      name: "Lisa Wong",
      city: "Berkeley",
      company: "Property Owner",
      image: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b",
    },
  },
  {
    content:
      "Removing our kitchen wall seemed daunting, but Cecilia Home made it stress-free. Their structural engineers, permit specialists, and construction team worked seamlessly together. The new open concept has transformed our home's functionality and light. We couldn't be happier!",
    rating: 4.9,
    author: {
      name: "Robert Kim",
      city: "Cupertino",
      company: "Homeowner",
      image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6",
    },
  },
];

/* ---------------------------------------------- Page --------------------------------------------- */
export default function LoadBearingWallRemovalPage() {
  return (
    <div>
      <Script {...getJsonLdScript("services-load-bearing-wall")} />
      <ServiceHero
        smallText="Your Local Load-Bearing Wall Removal Experts"
        title="California Load-Bearing Wall Removal Experts"
        description="Professional load-bearing wall removal and structural beam installation services in California. Create beautiful open concept kitchens and living spaces while ensuring structural integrity and code compliance."
        image="/images/home/load-bearing-wall-removal.png"
      />
      <States />

      <ServiceFeatures
        title="Expert Load-Bearing Wall Removal"
        description="Transform your California home with our professional structural wall removal services. From thorough engineering assessments to permit management and flawless beam installation, Cecilia Home delivers safe, beautiful open concept transformations with minimal disruption."
        features={Features}
        buttonText="Schedule Your Structural Assessment"
      />
      <Steps />

      <ServiceShowcase
        title="Featured Wall Removal Projects"
        description="Explore our collection of stunning load-bearing wall removal and open concept transformations throughout California. Each project showcases our structural expertise, engineering precision, and commitment to creating beautiful, functional spaces."
        buttonText="Get Your Free Consultation"
        serviceProjects={serviceProjects}
      />
      <ServiceFAQ
        title="Frequently Asked Questions"
        description="Answers to common questions about load-bearing wall removal, structural modifications, permits, and costs in California."
        questions={questions}
      />
      <ServiceTestimonials testimonials={testimonials} />
      <Trust />
    </div>
  );
}
