import { Trust } from "@/components/common/trust";
import ProjectFilter from "@/components/showcase/ProjectFilter";
import { getJsonLdScript } from "@/data/json-ld";
import { projects, projectTypes } from "@/data/projects";
import Script from "next/script";

// SEO Metadata
export const metadata = {
  title:
    "Completed Projects Gallery | California Architectural Design Portfolio",
  description:
    "Explore our California architectural portfolio: ADUs, additions, renovations & structural solutions. See stunning designs, approved permits & client transformations.",
  keywords: [
    "architectural project portfolio",
    "California building projects",
    "completed ADU designs",
    "home remodeling examples",
    "structural engineering projects",
    "before and after renovations",
    "California construction portfolio",
    "successful building permits",
    "residential design gallery",
    "commercial building projects California",
  ],

  // Open Graph 数据 - 优化社交媒体分享
  openGraph: {
    title: "California Architecture & Design Portfolio | Cecilia Home Design",
    description:
      "Explore our showcase of completed architectural projects throughout California. See real-world examples of our award-winning designs, renovations, ADUs and structural solutions.",
    images: [
      {
        url: "https://www.localhost.com/images/portfolio-showcase.jpg", // 更新为展示作品的图片
        width: 1200,
        height: 630,
        alt: "Featured Architectural Projects in California",
      },
    ],
    locale: "en_US",
    type: "website",
    siteName: "Cecilia Home Design",
  },
  // Twitter Card 元数据
  twitter: {
    card: "summary_large_image",
    title: "Inspiring Architectural Portfolio | California Design Projects",
    description:
      "Browse our portfolio of successful architectural and structural projects across California. From ADUs to commercial spaces.",
    images: ["https://www.localhost.com/images/portfolio-showcase.jpg"], // 保持与OG图片一致
  },
  alternates: {
    canonical: "https://www.localhost.com/showcase", // 更新为正确的作品集页面URL
  },
};

export default function ShowcasesPage() {
  return (
    <div>
      <Script {...getJsonLdScript("showcase")} />
      <section className="min-h-screen py-16 md:py-20 bg-background">
        <div className="container mx-auto ">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Project Showcases
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Design and Engineering Services Throughout California
            </p>
          </div>

          {/* Client-side project filter component */}
          <ProjectFilter projectTypes={projectTypes} projects={projects} />
        </div>
      </section>
      <Trust />
    </div>
  );
}
