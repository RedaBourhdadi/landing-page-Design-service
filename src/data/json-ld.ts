// 定义 JSON-LD 图表项的类型
export interface JsonLdGraphItem {
  "@type": string;
  "@id"?: string;
  [key: string]: unknown;
}

// 定义 JsonLD 类型的接口
export interface JsonLdData {
  "@context": string;
  "@graph"?: JsonLdGraphItem[];
  [key: string]: unknown;
}

// 定义项目中使用的页面键名
export type PageKey =
  | "home"
  | "about"
  | "showcase"
  | "services-adus"
  | "services-foundation"
  | "services-interior"
  | "services-home-addition"
  | "services-load-bearing-wall"
  | "services-permit"
  | "services-fire-damage";

// 包含所有 JSON-LD 数据的对象
export const jsonLd: Record<string, JsonLdData> = {
  // 首页 JSON-LD
  home: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.localhost.com/#organization",
        name: "Cecilia Home Design",
        url: "https://www.localhost.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/logo.svg",
          width: 180,
          height: 60,
        },
        sameAs: [
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://www.linkedin.com/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+06000000000",
          contactType: "customer service",
          areaServed: "California",
          availableLanguage: ["English", "Chinese"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.localhost.com/#localbusiness",
        name: "Cecilia Home Design",
        image: "https://www.localhost.com/images/homepage-showcase.jpg",
        priceRange: "$$$",
        telephone: "+06000000000",
        email: "info@localhost.com",
        url: "https://www.localhost.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1816 Enclave Pl",
          addressLocality: "Concord",
          addressRegion: "CA",
          postalCode: "94519",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 37.7749,
          longitude: -122.4194,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "3.7",
          reviewCount: "9",
          bestRating: "5",
          worstRating: "1",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday"],
            opens: "10:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday"],
            opens: "10:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Wednesday"],
            opens: "10:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Thursday"],
            opens: "10:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Friday"],
            opens: "10:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "00:00",
            closes: "00:00",
          },
        ],
        description: "Architectural designer in Concord, California",
      },
      {
        "@type": "Service",
        name: "Architectural & Structural Design Services",
        provider: {
          "@id": "https://www.localhost.com/#organization",
        },
        areaServed: {
          "@type": "State",
          name: "California",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Design Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "ADU Design",
                url: "https://www.localhost.com/services/adus",
                description:
                  "Accessory Dwelling Unit design providing complete solutions for independent living spaces.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Foundation Assessment",
                url: "https://www.localhost.com/services/foundation-inspection",
                description:
                  "Professional evaluation of foundation conditions and repair solutions to ensure building safety.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Interior Remodeling",
                url: "https://www.localhost.com/services/interior-remodeling",
                description:
                  "Modern renovation of interior spaces including kitchens, bathrooms, and bedrooms.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Home Addition",
                url: "https://www.localhost.com/services/home-addition",
                description:
                  "Professional home addition services throughout California.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Load-Bearing Wall Removal",
                url: "https://www.localhost.com/services/load-bearing-wall-removal",
                description:
                  "Professional removal, modification, and reinforcement of load-bearing walls ensuring structural integrity.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Permit Application Services",
                url: "https://www.localhost.com/services/permit-application-services",
                description:
                  "Professional building permit assistance and application services throughout California. Navigate complex permitting processes with expert guidance for residential and commercial projects.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Fire Damage Restoration",
                url: "https://www.localhost.com/services/fire-damage-restoration",
                description:
                  "Comprehensive fire damage assessment and restoration services for residential and commercial properties.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.localhost.com/#website",
        url: "https://www.localhost.com",
        name: "Cecilia Home Design",
        description:
          "Expert architectural design and permit services in California.",
        publisher: {
          "@id": "https://www.localhost.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.localhost.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  },

  // 关于页面 JSON-LD
  about: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.localhost.com/about/#aboutpage",
        isPartOf: {
          "@id": "https://www.localhost.com/#website",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/images/team-photo.jpg",
        },
        headline: "About Cecilia Home Design",
        description:
          "Learn about Cecilia Home, our mission, values, and our team of design and engineering professionals.",
        mainContentOfPage: {
          "@type": "WebPageElement",
          cssSelector: "main",
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": "https://www.localhost.com/",
                name: "Home",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@id": "https://www.localhost.com/about/",
                name: "About Us",
              },
            },
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.localhost.com/#organization",
        name: "Cecilia Home Design",
        url: "https://www.localhost.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/logo.svg",
          width: 180,
          height: 60,
        },
        description:
          "Cecilia Home Design is a full-service architectural and structural design firm based in California, specializing in residential and commercial projects.",
        foundingDate: "2015",
        founders: [
          {
            "@type": "Person",
            name: "Cecilia Wang",
            jobTitle: "Chief Architect & Founder",
          },
        ],
        knowsAbout: [
          "Architectural Design",
          "Structural Engineering",
          "ADU Design",
          "Interior Remodeling",
          "Home Additions",
          "Permit Services",
        ],
        slogan: "Turning architectural visions into reality",
        email: "info@localhost.com",
        telephone: "+06000000000",
        areaServed: {
          "@type": "State",
          name: "California",
        },
        member: [
          {
            "@type": "OrganizationRole",
            member: {
              "@type": "Person",
              name: "Cecilia Wang",
              jobTitle: "Chief Architect & Founder",
            },
            roleName: "Founder",
          },
          {
            "@type": "OrganizationRole",
            member: {
              "@type": "Person",
              name: "Michael Chen",
              jobTitle: "Structural Engineer",
            },
            roleName: "Lead Engineer",
          },
          {
            "@type": "OrganizationRole",
            member: {
              "@type": "Person",
              name: "Sarah Johnson",
              jobTitle: "Interior Designer",
            },
            roleName: "Design Lead",
          },
        ],
      },
    ],
  },

  // 展示页面 JSON-LD
  showcase: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.localhost.com/showcase/#collectionpage",
        isPartOf: {
          "@id": "https://www.localhost.com/#website",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/images/portfolio-showcase.jpg",
          width: 1200,
          height: 630,
        },
        headline: "Project Showcases",
        description:
          "View our successful California architectural projects including ADUs, home additions, renovations, and structural solutions.",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": "https://www.localhost.com/",
                name: "Home",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@id": "https://www.localhost.com/showcase/",
                name: "Project Showcases",
              },
            },
          ],
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "ArchitecturalDesign",
                name: "ADU Design in San Jose",
                description:
                  "Modern accessory dwelling unit with efficient space utilization and custom interior design.",
                image:
                  "https://www.localhost.com/images/projects/adu-san-jose.jpg",
                url: "https://www.localhost.com/showcase/adu-design-in-san-jose",
                author: {
                  "@id": "https://www.localhost.com/#organization",
                },
                locationCreated: {
                  "@type": "City",
                  name: "San Jose",
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "CA",
                    addressCountry: "US",
                  },
                },
                workExample: {
                  "@type": "VisualArtwork",
                  artMedium: "Architectural Design",
                  artform: "ADU Design",
                },
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "ArchitecturalDesign",
                name: "Kitchen Remodel in Cupertino",
                description:
                  "Complete kitchen renovation with modern appliances, custom cabinetry, and open concept design.",
                image:
                  "https://www.localhost.com/images/projects/kitchen-cupertino.jpg",
                url: "https://www.localhost.com/showcase/kitchen-remodel-in-cupertino",
                author: {
                  "@id": "https://www.localhost.com/#organization",
                },
                locationCreated: {
                  "@type": "City",
                  name: "Cupertino",
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "CA",
                    addressCountry: "US",
                  },
                },
                workExample: {
                  "@type": "VisualArtwork",
                  artMedium: "Interior Design",
                  artform: "Kitchen Remodeling",
                },
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "ArchitecturalDesign",
                name: "Load-Bearing Wall Removal in Palo Alto",
                description:
                  "Structural engineering solution for removing load-bearing walls to create an open floor plan while maintaining building integrity.",
                image:
                  "https://www.localhost.com/images/projects/wall-removal-palo-alto.jpg",
                url: "https://www.localhost.com/showcase/load-bearing-wall-removal-in-palo-alto",
                author: {
                  "@id": "https://www.localhost.com/#organization",
                },
                locationCreated: {
                  "@type": "City",
                  name: "Palo Alto",
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "CA",
                    addressCountry: "US",
                  },
                },
                workExample: {
                  "@type": "VisualArtwork",
                  artMedium: "Structural Engineering",
                  artform: "Load-Bearing Wall Removal",
                },
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.localhost.com/showcase/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://www.localhost.com/",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://www.localhost.com/showcase/",
              name: "Project Showcases",
            },
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://www.localhost.com/#organization",
        name: "Cecilia Home Design",
        url: "https://www.localhost.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/logo.svg",
          width: 180,
          height: 60,
        },
      },
    ],
  },

  // 各服务页面 JSON-LD - 平铺式结构
  "services-adus": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.localhost.com/services/adus/#service",
        name: "ADU Design Services",
        description:
          "Expert California ADU design services with pre-approved plans, permit assistance, and construction guidance. Learn how to build an ADU and maximize property value in California.",
        provider: {
          "@id": "https://www.localhost.com/#organization",
        },
        serviceType: "Architectural Design",
        areaServed: {
          "@type": "State",
          name: "California",
        },
        category: "Residential Architecture",
        audience: {
          "@type": "Audience",
          audienceType: "Homeowners",
        },
        serviceOutput: "Accessory Dwelling Unit",
        offers: {
          "@type": "Offer",
          price: "5000.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "5000.00",
            priceCurrency: "USD",
            minPrice: "5000.00",
            maxPrice: "15000.00",
            valueAddedTaxIncluded: false,
          },
          description:
            "ADU design services including custom plans, permit assistance, and construction guidance.",
          availability: "https://schema.org/InStock",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "ADU Design Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom ADU Design",
                description:
                  "Personalized ADU designs tailored to your property and needs",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "ADU Permit Assistance",
                description:
                  "Expert help navigating California ADU permitting requirements",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pre-Approved ADU Plans",
                description:
                  "Ready-to-build ADU designs that expedite the permit process",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "ADU Construction Guidance",
                description:
                  "Technical support throughout the construction process",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.localhost.com/services/adus/#faqpage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is an Accessory Dwelling Unit (ADU)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An Accessory Dwelling Unit (ADU) is a secondary housing unit on a single-family residential lot. It has its own kitchen, bathroom, and sleeping area, and can be attached to or detached from the main house. ADUs are also known as granny flats, in-law suites, or backyard cottages.",
            },
          },
          {
            "@type": "Question",
            name: "Why should I consider building an ADU?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Building an ADU can increase your property value, generate rental income, provide housing for family members, or offer flexible living space. It's a smart investment in California's competitive housing market.",
            },
          },
          {
            "@type": "Question",
            name: "What are the typical costs of designing and building an ADU?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ADU costs vary widely depending on size, complexity, finishes, and location. Design and permit fees can range from $5,000 to $15,000+, and construction costs can range from $100,000 to $300,000+. We provide detailed cost breakdowns and transparent pricing during our consultation.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to design and build an ADU?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The timeline for an ADU project depends on design complexity, permit processing times, and construction duration. Design and permitting can take 2-6 months, and construction can take 4-9 months. We provide estimated timelines during the planning phase and keep you updated throughout the project.",
            },
          },
          {
            "@type": "Question",
            name: "What permits are required for ADU construction in California?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ADU construction requires building permits, and may also involve planning, zoning, and utility permits depending on local regulations. We handle the entire permit application process, ensuring compliance and a smooth approval.",
            },
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://www.localhost.com/services/adus/#projects",
        name: "Featured ADU Projects",
        description:
          "Explore our recently completed ADU projects throughout California.",
        numberOfItems: 6,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "ArchitecturalWork",
              name: "Modern Backyard ADU in San Francisco",
              description:
                "A contemporary 650 sq ft detached ADU with high ceilings, abundant natural light, and a space-efficient open floor plan.",
              image:
                "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09",
              url: "https://www.localhost.com/showcase/modern-backyard-adu-san-francisco",
              location: {
                "@type": "City",
                name: "San Francisco",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              size: {
                "@type": "QuantitativeValue",
                value: 650,
                unitCode: "SquareFoot",
              },
              category: "Detached ADU",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "ArchitecturalWork",
              name: "Stylish Garage Conversion ADU in Los Angeles",
              description:
                "A 480 sq ft garage conversion transformed into a modern living space with custom storage solutions and high-end finishes.",
              image:
                "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4",
              url: "https://www.localhost.com/showcase/garage-conversion-adu-los-angeles",
              location: {
                "@type": "City",
                name: "Los Angeles",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              size: {
                "@type": "QuantitativeValue",
                value: 480,
                unitCode: "SquareFoot",
              },
              category: "Garage Conversion",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "ArchitecturalWork",
              name: "Seamless Attached ADU in San Diego",
              description:
                "An 800 sq ft attached ADU featuring a private entrance, one bedroom, and an expansive living area with indoor-outdoor flow.",
              image:
                "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b",
              url: "https://www.localhost.com/showcase/attached-adu-san-diego",
              location: {
                "@type": "City",
                name: "San Diego",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              size: {
                "@type": "QuantitativeValue",
                value: 800,
                unitCode: "SquareFoot",
              },
              category: "Attached ADU",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.localhost.com/services/adus/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://www.localhost.com/",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://www.localhost.com/services/",
              name: "Services",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": "https://www.localhost.com/services/adus/",
              name: "ADU Design",
            },
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.localhost.com/services/adus/#webpage",
        url: "https://www.localhost.com/services/adus/",
        name: "ADU Design & Permits California | Accessory Dwelling Unit Plans",
        description:
          "Expert California ADU design services with pre-approved plans, permit assistance, and construction guidance.",
        isPartOf: {
          "@id": "https://www.localhost.com/#website",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/images/adu-showcase.jpg",
        },
        breadcrumb: {
          "@id": "https://www.localhost.com/services/adus/#breadcrumb",
        },
        mainContentOfPage: {
          "@type": "WebPageElement",
          cssSelector: "main",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.localhost.com/#organization",
        name: "Cecilia Home Design",
        url: "https://www.localhost.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/logo.svg",
          width: 180,
          height: 60,
        },
      },
    ],
  },

  "services-foundation": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id":
          "https://www.localhost.com/services/foundation-inspection/#service",
        name: "Foundation Inspection & Repair Services",
        description:
          "Professional foundation assessment, inspection, and repair services for residential and commercial properties in California. Ensure your building's structural integrity with expert engineering solutions.",
        provider: {
          "@id": "https://www.localhost.com/#organization",
        },
        serviceType: "Structural Engineering",
        areaServed: {
          "@type": "State",
          name: "California",
        },
        category: "Foundation Engineering",
        audience: {
          "@type": "Audience",
          audienceType: "Property Owners",
        },
        serviceOutput: "Foundation Assessment Report",
        offers: {
          "@type": "Offer",
          price: "800.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "800.00",
            priceCurrency: "USD",
            minPrice: "800.00",
            maxPrice: "5000.00",
            valueAddedTaxIncluded: false,
          },
          description:
            "Professional foundation inspection services including comprehensive assessment, detailed reports, and repair recommendations.",
          availability: "https://schema.org/InStock",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Foundation Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Foundation Inspection",
                description:
                  "Comprehensive assessment of foundation condition and structural integrity",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Foundation Repair Design",
                description:
                  "Custom engineering solutions for foundation damage and settlement issues",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Seismic Retrofitting",
                description:
                  "Strengthening existing foundations to improve earthquake resistance",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Drainage Solutions",
                description:
                  "Engineering proper drainage systems to prevent foundation water damage",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.localhost.com/services/foundation-inspection/#faqpage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are the signs of foundation problems?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Common signs include cracks in walls, floors, or ceilings; doors or windows that stick or won't close properly; sloping or uneven floors; gaps between walls, windows, or doors; and visible cracks or movement in the exterior foundation. If you notice any of these warning signs, a professional foundation inspection is recommended.",
            },
          },
          {
            "@type": "Question",
            name: "How often should foundations be inspected?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For most homes in California, a foundation inspection every 3-5 years is recommended, especially in areas with expansive soils or seismic activity. Newer builds should have their foundation inspected after the first year, and then every 3-5 years thereafter. If you notice any warning signs of foundation issues, an immediate inspection is advised regardless of timing.",
            },
          },
          {
            "@type": "Question",
            name: "What does a foundation inspection include?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our comprehensive foundation inspection includes examining the interior and exterior of the property for signs of structural issues, measuring floor elevations to identify settlement or heaving, assessing drainage systems, evaluating the soil around the foundation, checking for seismic vulnerabilities, and providing a detailed report with findings and recommendations for repairs if needed.",
            },
          },
          {
            "@type": "Question",
            name: "How much does foundation repair typically cost in California?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Foundation repair costs in California typically range from $2,000 for minor crack repairs to $30,000+ for major structural repairs. The exact cost depends on the type and extent of damage, the size of the property, accessibility issues, soil conditions, and the required repair method. We provide detailed cost estimates after completing a thorough inspection.",
            },
          },
          {
            "@type": "Question",
            name: "Are foundation repairs covered by homeowners insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most standard homeowners insurance policies do not cover foundation repairs when damage is caused by settlement, soil movement, or poor construction. However, if the foundation damage is caused by a covered peril (such as a burst water pipe or fire), repairs may be partially or fully covered. We recommend reviewing your specific policy and consulting with your insurance provider.",
            },
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id":
          "https://www.localhost.com/services/foundation-inspection/#projects",
        name: "Featured Foundation Projects",
        description:
          "Explore our recently completed foundation inspection and repair projects throughout California.",
        numberOfItems: 3,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "ConstructionProject",
              name: "Seismic Retrofitting in San Francisco",
              description:
                "Complete foundation reinforcement and seismic retrofitting for a 1920s Victorian home in San Francisco, providing earthquake protection while preserving the historic character.",
              image:
                "https://images.unsplash.com/photo-1575517111839-3a3843ee7929",
              url: "https://www.localhost.com/showcase/seismic-retrofitting-victorian-san-francisco",
              location: {
                "@type": "City",
                name: "San Francisco",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Seismic Retrofitting",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "ConstructionProject",
              name: "Foundation Repair for Hillside Home in Berkeley",
              description:
                "Comprehensive foundation repair and drainage improvements for a hillside property experiencing settlement issues due to soil erosion and water damage.",
              image:
                "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
              url: "https://www.localhost.com/showcase/hillside-foundation-repair-berkeley",
              location: {
                "@type": "City",
                name: "Berkeley",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Foundation Repair",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "ConstructionProject",
              name: "Commercial Building Foundation Assessment in San Jose",
              description:
                "Detailed structural assessment and repair recommendations for a 30-year-old commercial building showing signs of foundation settlement and structural stress.",
              image:
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
              url: "https://www.localhost.com/showcase/commercial-foundation-assessment-san-jose",
              location: {
                "@type": "City",
                name: "San Jose",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Commercial Assessment",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.localhost.com/services/foundation-inspection/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://www.localhost.com/",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://www.localhost.com/services/",
              name: "Services",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id":
                "https://www.localhost.com/services/foundation-inspection/",
              name: "Foundation Inspection",
            },
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.localhost.com/services/foundation-inspection/#webpage",
        url: "https://www.localhost.com/services/foundation-inspection/",
        name: "Foundation Inspection & Repair California | Structural Assessment",
        description:
          "Professional foundation assessment and repair services throughout California. Expert structural engineers provide thorough inspections and effective solutions.",
        isPartOf: {
          "@id": "https://www.localhost.com/#website",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/images/foundation-inspection.jpg",
        },
        breadcrumb: {
          "@id":
            "https://www.localhost.com/services/foundation-inspection/#breadcrumb",
        },
        mainContentOfPage: {
          "@type": "WebPageElement",
          cssSelector: "main",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.localhost.com/#organization",
        name: "Cecilia Home Design",
        url: "https://www.localhost.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/logo.svg",
          width: 180,
          height: 60,
        },
      },
    ],
  },

  "services-interior": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id":
          "https://www.localhost.com/services/interior-remodeling/#service",
        name: "Interior Remodeling Services",
        description:
          "Professional interior design and remodeling services for kitchens, bathrooms, bedrooms, and living spaces throughout California. Transform your home with expert design and quality craftsmanship.",
        provider: {
          "@id": "https://www.localhost.com/#organization",
        },
        serviceType: "Interior Design",
        areaServed: {
          "@type": "State",
          name: "California",
        },
        category: "Home Renovation",
        audience: {
          "@type": "Audience",
          audienceType: "Homeowners",
        },
        serviceOutput: "Remodeled Interior Space",
        offers: {
          "@type": "Offer",
          price: "10000.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "10000.00",
            priceCurrency: "USD",
            minPrice: "10000.00",
            maxPrice: "100000.00",
            valueAddedTaxIncluded: false,
          },
          description:
            "Complete interior remodeling services including design, material selection, construction, and finishing.",
          availability: "https://schema.org/InStock",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Interior Remodeling Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Kitchen Remodeling",
                description:
                  "Complete kitchen renovations with custom cabinetry, countertops, and modern appliances",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Bathroom Remodeling",
                description:
                  "Luxurious bathroom updates with custom showers, vanities, and efficient layouts",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Open Concept Conversion",
                description:
                  "Transform compartmentalized spaces into open, flowing floor plans",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Bedroom & Living Space Redesign",
                description:
                  "Stylish bedroom and living area transformations maximizing comfort and functionality",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.localhost.com/services/interior-remodeling/#faqpage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does interior remodeling cost in California?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Interior remodeling costs in California vary widely based on the project scope, materials, and location. Kitchen remodels typically range from $30,000 to $100,000+, bathroom remodels from $15,000 to $50,000+, and whole-home interior renovations can start at $100,000. We provide detailed estimates and work with clients to develop plans that fit their budgets.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a typical interior remodeling project take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Project timelines depend on scope and complexity. Bathroom remodels typically take 3-6 weeks, kitchen remodels 6-12 weeks, and whole-home renovations can take 3-6 months or longer. During your consultation, we provide a detailed project timeline and keep you updated throughout the process.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need permits for interior remodeling?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most significant interior remodeling projects in California require permits, particularly those involving structural changes, plumbing, electrical work, or moving walls. Our team handles all necessary permit applications and ensures your project meets local building codes and regulations.",
            },
          },
          {
            "@type": "Question",
            name: "What's the process for working with your interior design team?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our process begins with an initial consultation to understand your vision and needs. We then develop a design concept with material selections, followed by detailed plans and estimates. After finalizing designs and contracts, construction begins with regular client updates. We conclude with a final walkthrough and ensure your complete satisfaction with the finished space.",
            },
          },
          {
            "@type": "Question",
            name: "Can you help with material selection and furniture for my remodeled space?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our interior design services include material selection, color schemes, fixtures, and furniture recommendations. We can provide complete design services including sourcing and procurement of all elements for your space, creating a cohesive and personalized interior that reflects your style and needs.",
            },
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id":
          "https://www.localhost.com/services/interior-remodeling/#projects",
        name: "Featured Interior Remodeling Projects",
        description:
          "Explore our recently completed interior renovation projects throughout California.",
        numberOfItems: 3,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "DesignProject",
              name: "Modern Farmhouse Kitchen in Palo Alto",
              description:
                "Complete kitchen renovation featuring custom white cabinetry, quartz countertops, wood accents, and high-end appliances in a spacious open-concept design.",
              image:
                "https://images.unsplash.com/photo-1556912173-3bb406ef7e77",
              url: "https://www.localhost.com/showcase/modern-farmhouse-kitchen-palo-alto",
              location: {
                "@type": "City",
                name: "Palo Alto",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Kitchen Remodeling",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "DesignProject",
              name: "Luxury Master Bathroom Suite in San Francisco",
              description:
                "Spa-inspired master bathroom featuring a freestanding soaking tub, walk-in shower with rainfall head, dual vanity with custom cabinetry, and heated marble flooring.",
              image:
                "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
              url: "https://www.localhost.com/showcase/luxury-master-bathroom-san-francisco",
              location: {
                "@type": "City",
                name: "San Francisco",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Bathroom Remodeling",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "DesignProject",
              name: "Open Concept Living Space in Los Angeles",
              description:
                "Transformation of a traditional compartmentalized home into a modern open concept space, featuring removed walls, raised ceilings, and seamless flow between kitchen, dining, and living areas.",
              image:
                "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32",
              url: "https://www.localhost.com/showcase/open-concept-renovation-los-angeles",
              location: {
                "@type": "City",
                name: "Los Angeles",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Open Concept Renovation",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.localhost.com/services/interior-remodeling/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://www.localhost.com/",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://www.localhost.com/services/",
              name: "Services",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": "https://www.localhost.com/services/interior-remodeling/",
              name: "Interior Remodeling",
            },
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.localhost.com/services/interior-remodeling/#webpage",
        url: "https://www.localhost.com/services/interior-remodeling/",
        name: "Interior Remodeling California | Kitchen, Bathroom & Home Renovation",
        description:
          "Expert interior remodeling services for kitchens, bathrooms, and living spaces throughout California. Transform your home with professional design and quality craftsmanship.",
        isPartOf: {
          "@id": "https://www.localhost.com/#website",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/images/interior-remodeling.jpg",
        },
        breadcrumb: {
          "@id":
            "https://www.localhost.com/services/interior-remodeling/#breadcrumb",
        },
        mainContentOfPage: {
          "@type": "WebPageElement",
          cssSelector: "main",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.localhost.com/#organization",
        name: "Cecilia Home Design",
        url: "https://www.localhost.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/logo.svg",
          width: 180,
          height: 60,
        },
      },
    ],
  },

  "services-home-addition": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.localhost.com/services/home-addition/#service",
        name: "Home Addition Services",
        description:
          "Expert home addition design and construction services throughout California. Expand your living space with room additions, second stories, and thoughtful home extensions.",
        provider: {
          "@id": "https://www.localhost.com/#organization",
        },
        serviceType: "Architectural Design",
        areaServed: {
          "@type": "State",
          name: "California",
        },
        category: "Residential Construction",
        audience: {
          "@type": "Audience",
          audienceType: "Homeowners",
        },
        serviceOutput: "Home Addition",
        offers: {
          "@type": "Offer",
          price: "20000.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "20000.00",
            priceCurrency: "USD",
            minPrice: "20000.00",
            maxPrice: "250000.00",
            valueAddedTaxIncluded: false,
          },
          description:
            "Complete home addition services including architectural design, engineering, permitting, and construction.",
          availability: "https://schema.org/InStock",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Home Addition Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Room Addition",
                description:
                  "Single or multi-room expansions to add living space to your existing home",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Second Story Addition",
                description:
                  "Vertical expansions adding an entire new level to your home",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Bump-Out Addition",
                description:
                  "Small-scale extensions that add critical space to existing rooms",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Garage Conversion",
                description:
                  "Transform garage space into functional living areas",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.localhost.com/services/home-addition/#faqpage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does a home addition cost in California?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Home addition costs in California typically range from $200 to $500 per square foot, depending on the complexity, materials, location, and current construction costs. A basic 400 sq ft room addition might start around $80,000, while a full second-story addition on a 1,500 sq ft home could cost $300,000 or more. We provide detailed estimates based on your specific project needs.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to complete a home addition?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The timeline for home additions varies based on size and complexity. Design and permitting typically takes 2-4 months, while construction ranges from 3-6 months for smaller additions to 6-12 months for larger projects like second stories. Weather, material availability, and local regulations can impact timelines.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need permits for a home addition in California?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, home additions in California require building permits and must comply with local building codes. Depending on your location, you may also need approval from planning departments, homeowners associations, and possibly coastal or environmental commissions. Our team handles the entire permitting process to ensure compliance with all regulations.",
            },
          },
          {
            "@type": "Question",
            name: "Can I stay in my home during the addition construction?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In most cases, you can remain in your home during a home addition project, especially for additions that are well-separated from your main living space. For second-story additions or extensive renovations, temporary relocation might be recommended during certain phases. We work closely with clients to minimize disruptions and develop construction plans that accommodate your living situation.",
            },
          },
          {
            "@type": "Question",
            name: "Will a home addition increase my property value?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Well-designed home additions typically increase property value, though the return on investment varies. In California's competitive real estate market, strategic additions like master suites, family rooms, or expanded kitchens generally recoup 60-80% of their cost in added value. Beyond financial returns, additions provide improved livability and can eliminate the need for moving to a larger home.",
            },
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://www.localhost.com/services/home-addition/#projects",
        name: "Featured Home Addition Projects",
        description:
          "Explore our recently completed home addition projects throughout California.",
        numberOfItems: 3,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "ConstructionProject",
              name: "Second Story Addition in Oakland",
              description:
                "Complete second floor addition adding three bedrooms and two bathrooms to a single-story bungalow, doubling the living space while maintaining the home's architectural character.",
              image:
                "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
              url: "https://www.localhost.com/showcase/second-story-addition-oakland",
              location: {
                "@type": "City",
                name: "Oakland",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Second Story Addition",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "ConstructionProject",
              name: "Master Suite Addition in San Diego",
              description:
                "Luxury 600 sq ft master suite addition featuring a spacious bedroom, walk-in closet, and spa-like bathroom with custom details and direct access to the garden.",
              image:
                "https://images.unsplash.com/photo-1560185007-5f0bb1866cab",
              url: "https://www.localhost.com/showcase/master-suite-addition-san-diego",
              location: {
                "@type": "City",
                name: "San Diego",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Room Addition",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "ConstructionProject",
              name: "Kitchen & Family Room Extension in Pasadena",
              description:
                "Expansive kitchen and family room addition creating an open-concept heart of the home with high ceilings, abundant natural light, and seamless indoor-outdoor living.",
              image:
                "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83",
              url: "https://www.localhost.com/showcase/kitchen-family-room-addition-pasadena",
              location: {
                "@type": "City",
                name: "Pasadena",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Room Addition",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.localhost.com/services/home-addition/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://www.localhost.com/",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://www.localhost.com/services/",
              name: "Services",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": "https://www.localhost.com/services/home-addition/",
              name: "Home Addition",
            },
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.localhost.com/services/home-addition/#webpage",
        url: "https://www.localhost.com/services/home-addition/",
        name: "Home Addition California | Room Additions & Home Extensions",
        description:
          "Expert home addition design and construction services throughout California. Add space and value with room additions, second stories, and thoughtful home extensions.",
        isPartOf: {
          "@id": "https://www.localhost.com/#website",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/images/home-addition.jpg",
        },
        breadcrumb: {
          "@id": "https://www.localhost.com/services/home-addition/#breadcrumb",
        },
        mainContentOfPage: {
          "@type": "WebPageElement",
          cssSelector: "main",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.localhost.com/#organization",
        name: "Cecilia Home Design",
        url: "https://www.localhost.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/logo.svg",
          width: 180,
          height: 60,
        },
      },
    ],
  },

  "services-load-bearing-wall": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id":
          "https://www.localhost.com/services/load-bearing-wall-removal/#service",
        name: "Load-Bearing Wall Removal Services",
        description:
          "Professional load-bearing wall removal and structural modification services in California. Create open-concept spaces while ensuring structural integrity with expert engineering solutions.",
        provider: {
          "@id": "https://www.localhost.com/#organization",
        },
        serviceType: "Structural Engineering",
        areaServed: {
          "@type": "State",
          name: "California",
        },
        category: "Structural Modification",
        audience: {
          "@type": "Audience",
          audienceType: "Homeowners",
        },
        serviceOutput: "Open Floor Plan",
        offers: {
          "@type": "Offer",
          price: "7000.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "7000.00",
            priceCurrency: "USD",
            minPrice: "7000.00",
            maxPrice: "25000.00",
            valueAddedTaxIncluded: false,
          },
          description:
            "Load-bearing wall removal services including structural assessment, beam design, permit acquisition, and proper installation.",
          availability: "https://schema.org/InStock",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Load-Bearing Wall Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Structural Assessment",
                description:
                  "Comprehensive evaluation of wall function and structural impact of removal",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Beam Design & Engineering",
                description:
                  "Custom structural solutions to replace load-bearing walls",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Permit Acquisition",
                description:
                  "Complete handling of necessary building permits and approvals",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Wall Removal & Support Installation",
                description:
                  "Professional removal and replacement with appropriate structural supports",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.localhost.com/services/load-bearing-wall-removal/#faqpage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I know if a wall is load-bearing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Signs that a wall may be load-bearing include: location perpendicular to floor joists; walls that are continuous from foundation to roof; walls on the first floor that align with walls on upper floors; and walls in the center of the home. However, the only way to be certain is to have a professional structural assessment. Our engineers can definitively determine if a wall is load-bearing through on-site inspection and review of building plans.",
            },
          },
          {
            "@type": "Question",
            name: "Can any load-bearing wall be removed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most load-bearing walls can be removed with proper engineering. The key is replacing the wall's structural function with appropriate supports like beams and posts. Our structural engineers design custom solutions to maintain your home's structural integrity while creating the open space you desire. In rare cases, some walls may be too critical to remove, but we always explore all possible options.",
            },
          },
          {
            "@type": "Question",
            name: "How much does it cost to remove a load-bearing wall in California?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The cost to remove a load-bearing wall in California typically ranges from $7,000 to $25,000+, depending on the wall size, structural complexity, required beam size, and whether utilities are present in the wall. Factors affecting cost include engineering fees, permits, materials, labor, and finishing work. We provide detailed cost breakdowns after completing a structural assessment.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need permits to remove a load-bearing wall?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, removing a load-bearing wall requires permits in all California jurisdictions. This typically includes building permits and possibly electrical or plumbing permits if utilities are affected. Proceeding without proper permits can result in fines, complications when selling your home, and potentially dangerous structural issues. Our team handles the entire permitting process to ensure compliance with all regulations.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to remove a load-bearing wall?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The timeline for a load-bearing wall removal project typically spans 3-6 weeks total. This includes 1-2 weeks for structural assessment and engineering plans, 2-4 weeks for permit approval (varies by jurisdiction), and 3-7 days for the actual removal and structural support installation. Additional time may be needed for finishing work like drywall, flooring, and painting.",
            },
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id":
          "https://www.localhost.com/services/load-bearing-wall-removal/#projects",
        name: "Featured Load-Bearing Wall Projects",
        description:
          "Explore our recently completed load-bearing wall removal projects throughout California.",
        numberOfItems: 3,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "ConstructionProject",
              name: "Open Concept Kitchen Transformation in San Francisco",
              description:
                "Removal of two load-bearing walls to create a spacious open-concept kitchen, dining, and living area while maintaining structural integrity with engineered beams.",
              image:
                "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d",
              url: "https://www.localhost.com/showcase/open-concept-kitchen-san-francisco",
              location: {
                "@type": "City",
                name: "San Francisco",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Kitchen Wall Removal",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "ConstructionProject",
              name: "First Floor Reconfiguration in Los Angeles",
              description:
                "Strategic removal of central load-bearing wall and installation of an engineered beam system to create a modern, flowing floor plan while supporting second story loads.",
              image:
                "https://images.unsplash.com/photo-1600607687644-c7531e489ece",
              url: "https://www.localhost.com/showcase/first-floor-reconfiguration-los-angeles",
              location: {
                "@type": "City",
                name: "Los Angeles",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Complete Floor Reconfiguration",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "ConstructionProject",
              name: "Victorian Home Modernization in Berkeley",
              description:
                "Careful removal of original load-bearing walls in a historic Victorian home, preserving architectural details while creating modern, open living spaces with concealed structural supports.",
              image:
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              url: "https://www.localhost.com/showcase/victorian-modernization-berkeley",
              location: {
                "@type": "City",
                name: "Berkeley",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Historic Home Renovation",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.localhost.com/services/load-bearing-wall-removal/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://www.localhost.com/",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://www.localhost.com/services/",
              name: "Services",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id":
                "https://www.localhost.com/services/load-bearing-wall-removal/",
              name: "Load-Bearing Wall Removal",
            },
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.localhost.com/services/load-bearing-wall-removal/#webpage",
        url: "https://www.localhost.com/services/load-bearing-wall-removal/",
        name: "Load-Bearing Wall Removal California | Structural Engineering Services",
        description:
          "Expert load-bearing wall removal services in California. Create open-concept spaces with professional structural engineering, beam design, and support installation.",
        isPartOf: {
          "@id": "https://www.localhost.com/#website",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/images/load-bearing-wall-removal.jpg",
        },
        breadcrumb: {
          "@id":
            "https://www.localhost.com/services/load-bearing-wall-removal/#breadcrumb",
        },
        mainContentOfPage: {
          "@type": "WebPageElement",
          cssSelector: "main",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.localhost.com/#organization",
        name: "Cecilia Home Design",
        url: "https://www.localhost.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/logo.svg",
          width: 180,
          height: 60,
        },
      },
    ],
  },

  "services-permit": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id":
          "https://www.localhost.com/services/permit-application-services/#service",
        name: "Permit Application Services",
        description:
          "Professional building permit assistance and application services throughout California. Navigate complex permitting processes with expert guidance for residential and commercial projects.",
        provider: {
          "@id": "https://www.localhost.com/#organization",
        },
        serviceType: "Permit Assistance",
        areaServed: {
          "@type": "State",
          name: "California",
        },
        category: "Construction Permits",
        audience: {
          "@type": "Audience",
          audienceType: "Property Owners",
        },
        serviceOutput: "Approved Building Permits",
        offers: {
          "@type": "Offer",
          price: "1500.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "1500.00",
            priceCurrency: "USD",
            minPrice: "1500.00",
            maxPrice: "10000.00",
            valueAddedTaxIncluded: false,
          },
          description:
            "Complete permit application services including document preparation, plan submittals, and coordination with local building departments.",
          availability: "https://schema.org/InStock",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Permit Application Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Building Permit Applications",
                description:
                  "Complete preparation and submission of building permit applications for new construction and remodels",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Permit Expediting",
                description:
                  "Accelerated permit processing through established relationships with local building departments",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Plan Check Response",
                description:
                  "Professional responses to plan check corrections and requirements",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Zoning & Planning Approvals",
                description:
                  "Navigation of zoning requirements, variances, and planning department approvals",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.localhost.com/services/permit-application-services/#faqpage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What types of building permits do you handle?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We handle all types of building permits in California, including: new construction permits; addition and remodel permits; demolition permits; electrical, plumbing, and mechanical permits; grading and site work permits; accessory structure permits; and conditional use permits. Our team has experience with residential, commercial, and mixed-use projects of all scales.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to get a building permit in California?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Permit timelines vary significantly depending on the jurisdiction and project complexity. Simple permits might be obtained in 2-6 weeks, while complex projects can take 3-6 months or longer. Factors affecting timeline include the jurisdiction's current workload, completeness of your application, project complexity, and whether planning department approval is required first. Our permit expediting services can often reduce these timeframes.",
            },
          },
          {
            "@type": "Question",
            name: "How much do your permit application services cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our permit application service fees typically range from $1,500 to $10,000 depending on project complexity, jurisdiction requirements, and level of service needed. This fee covers our professional services only and does not include actual permit fees paid to local governments, which vary by location and project valuation. We provide detailed cost breakdowns during our initial consultation.",
            },
          },
          {
            "@type": "Question",
            name: "What happens if my permit application is rejected?",
            acceptedAnswer: {
              "@type": "Answer",
              text: 'Permit applications are rarely outright rejected. More commonly, building departments issue corrections or requests for additional information through a "plan check" process. Our service includes responding to these corrections, making necessary revisions to plans, and resubmitting until approval is granted. Our experience with local requirements helps minimize corrections from the start, streamlining the process.',
            },
          },
          {
            "@type": "Question",
            name: "Do I need architectural plans before applying for permits?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For most construction projects in California, yes, you'll need professional architectural and/or engineering plans before applying for permits. The complexity of these plans depends on your project scope. Our team can handle both the design and permitting process as a complete package, or we can work with your existing design team to prepare permit documents. Simple projects like small repairs might not require full plans.",
            },
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id":
          "https://www.localhost.com/services/permit-application-services/#projects",
        name: "Successfully Permitted Projects",
        description:
          "Explore our recently completed permit application projects throughout California.",
        numberOfItems: 3,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Project",
              name: "Multi-Family Development Permits in Oakland",
              description:
                "Complete permitting package for a 24-unit multi-family development, including planning approvals, building permits, and coordination with multiple agencies.",
              image:
                "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
              url: "https://www.localhost.com/showcase/multi-family-permits-oakland",
              location: {
                "@type": "City",
                name: "Oakland",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Multi-Family Permits",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Project",
              name: "Expedited ADU Permits in San Jose",
              description:
                "Fast-tracked accessory dwelling unit permits obtained in record time through our expedited permit process and pre-approved design approach.",
              image:
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
              url: "https://www.localhost.com/showcase/expedited-adu-permits-san-jose",
              location: {
                "@type": "City",
                name: "San Jose",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "ADU Permits",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Project",
              name: "Coastal Commission Approval in Santa Cruz",
              description:
                "Complex residential remodel requiring Coastal Commission approval, environmental reviews, and coordination between multiple regulatory agencies.",
              image:
                "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
              url: "https://www.localhost.com/showcase/coastal-commission-approval-santa-cruz",
              location: {
                "@type": "City",
                name: "Santa Cruz",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Coastal Permits",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.localhost.com/services/permit-application-services/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://www.localhost.com/",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://www.localhost.com/services/",
              name: "Services",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id":
                "https://www.localhost.com/services/permit-application-services/",
              name: "Permit Application Services",
            },
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.localhost.com/services/permit-application-services/#webpage",
        url: "https://www.localhost.com/services/permit-application-services/",
        name: "Building Permit Services California | Construction Permit Applications",
        description:
          "Professional building permit application services throughout California. Navigate complex permitting processes with expert guidance for residential and commercial projects.",
        isPartOf: {
          "@id": "https://www.localhost.com/#website",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/images/permit-services.jpg",
        },
        breadcrumb: {
          "@id":
            "https://www.localhost.com/services/permit-application-services/#breadcrumb",
        },
        mainContentOfPage: {
          "@type": "WebPageElement",
          cssSelector: "main",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.localhost.com/#organization",
        name: "Cecilia Home Design",
        url: "https://www.localhost.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/logo.svg",
          width: 180,
          height: 60,
        },
      },
    ],
  },

  "services-fire-damage": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id":
          "https://www.localhost.com/services/fire-damage-restoration/#service",
        name: "Fire Damage Restoration Services",
        description:
          "Professional fire damage assessment, structural inspection, and restoration services in Southern California. Get expert help rebuilding your home or business after wildfire or structural fire damage.",
        provider: {
          "@id": "https://www.localhost.com/#organization",
        },
        serviceType: "Restoration Services",
        areaServed: {
          "@type": "State",
          name: "California",
        },
        category: "Fire Damage Restoration",
        audience: {
          "@type": "Audience",
          audienceType: "Property Owners",
        },
        serviceOutput: "Restored Property",
        offers: {
          "@type": "Offer",
          price: "5000.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "5000.00",
            priceCurrency: "USD",
            minPrice: "5000.00",
            maxPrice: "500000.00",
            valueAddedTaxIncluded: false,
          },
          description:
            "Complete fire damage restoration services including inspection, assessment, design, engineering, permitting, and reconstruction.",
          availability: "https://schema.org/InStock",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Fire Damage Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Structural Damage Assessment",
                description:
                  "Comprehensive evaluation of fire-damaged structures to determine safety and restoration needs",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Restoration Design",
                description:
                  "Custom architectural and engineering plans for rebuilding fire-damaged properties",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Insurance Coordination",
                description:
                  "Expert assistance working with insurance companies to maximize claim benefits",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Complete Rebuilding",
                description:
                  "End-to-end project management of the restoration process from design through construction",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.localhost.com/services/fire-damage-restoration/#faqpage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What should I do immediately after a fire damages my property?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "After ensuring everyone's safety and the fire is completely extinguished, your first steps should be: 1) Contact your insurance company to report the damage; 2) Secure the property to prevent further damage or unauthorized entry; 3) Document all damage with photos and notes; 4) Contact a professional structural engineer to assess the damage before entering if there's any concern about structural integrity; and 5) Reach out to our team for a comprehensive assessment and restoration plan.",
            },
          },
          {
            "@type": "Question",
            name: "How much does fire damage restoration typically cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fire damage restoration costs vary widely based on the extent of damage, size of the property, materials affected, and local building requirements. Minor smoke damage might cost $5,000-$20,000 to repair, while major structural damage can exceed $100,000-$500,000 for complete rebuilding. We provide detailed assessments and work closely with insurance companies to maximize your coverage benefits and minimize out-of-pocket expenses.",
            },
          },
          {
            "@type": "Question",
            name: "How long does fire damage restoration take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The timeline for complete restoration depends on damage severity, property size, and local permitting processes. Minor smoke damage might be addressed in 2-4 weeks, while significant structural damage requiring rebuilding can take 6-12 months. California wildfire areas with high demand for restoration services may experience longer timeframes. We provide realistic timeline estimates after completing our detailed assessment.",
            },
          },
          {
            "@type": "Question",
            name: "Will my insurance cover all fire damage restoration costs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Insurance coverage depends on your specific policy, the cause of the fire, and how well the damage is documented. Most homeowner policies cover fire damage, but coverage limits, deductibles, and exclusions vary. Our team works closely with insurance adjusters to document damage thoroughly, provide accurate repair estimates, and help ensure you receive the maximum coverage your policy allows.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle wildfire damage in high-risk California areas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we specialize in wildfire damage assessment and restoration throughout Southern California, including high-risk areas. Our team has extensive experience with wildfire rebuilding projects and understands the specific challenges of these situations, including working with insurance companies, navigating updated building codes for fire-resistant construction, and addressing community-wide recovery efforts.",
            },
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id":
          "https://www.localhost.com/services/fire-damage-restoration/#projects",
        name: "Featured Fire Damage Restoration Projects",
        description:
          "Explore our recently completed fire damage restoration projects throughout Southern California.",
        numberOfItems: 3,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Project",
              name: "Complete Home Rebuild After Wildfire in Malibu",
              description:
                "Full reconstruction of a 3,500 sq ft home destroyed by wildfire, incorporating modern fire-resistant materials and enhanced safety features while maintaining the property's original character.",
              image:
                "https://images.unsplash.com/photo-1599619585752-c3ac2fde1802",
              url: "https://www.localhost.com/showcase/wildfire-rebuild-malibu",
              location: {
                "@type": "City",
                name: "Malibu",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Complete Rebuild",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Project",
              name: "Partial Restoration in Santa Barbara",
              description:
                "Structural rehabilitation and partial rebuilding of a historic property with significant fire and smoke damage, preserving original architectural elements while upgrading systems and safety features.",
              image:
                "https://images.unsplash.com/photo-1602343168117-bb8a12d7c525",
              url: "https://www.localhost.com/showcase/partial-restoration-santa-barbara",
              location: {
                "@type": "City",
                name: "Santa Barbara",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Partial Restoration",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Project",
              name: "Commercial Building Restoration in San Diego",
              description:
                "Complete restoration of a fire-damaged retail complex, including structural repairs, systems replacement, and modernization of the space while minimizing business interruption.",
              image:
                "https://images.unsplash.com/photo-1582139329536-e7284fece509",
              url: "https://www.localhost.com/showcase/commercial-restoration-san-diego",
              location: {
                "@type": "City",
                name: "San Diego",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
              category: "Commercial Restoration",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.localhost.com/services/fire-damage-restoration/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://www.localhost.com/",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://www.localhost.com/services/",
              name: "Services",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id":
                "https://www.localhost.com/services/fire-damage-restoration/",
              name: "Fire Damage Restoration",
            },
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.localhost.com/services/fire-damage-restoration/#webpage",
        url: "https://www.localhost.com/services/fire-damage-restoration/",
        name: "Fire Damage Restoration California | Wildfire Rebuilding Services",
        description:
          "Expert fire damage assessment and rebuilding services throughout Southern California. Professional structural inspection, design, and reconstruction after wildfire or structural fire damage.",
        isPartOf: {
          "@id": "https://www.localhost.com/#website",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/images/fire-damage-restoration.jpg",
        },
        breadcrumb: {
          "@id":
            "https://www.localhost.com/services/fire-damage-restoration/#breadcrumb",
        },
        mainContentOfPage: {
          "@type": "WebPageElement",
          cssSelector: "main",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.localhost.com/#organization",
        name: "Cecilia Home Design",
        url: "https://www.localhost.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.localhost.com/logo.svg",
          width: 180,
          height: 60,
        },
      },
    ],
  },
};

/**
 * 获取指定页面的 JSON-LD 脚本配置
 * @param pageKey - 页面键名（如 'home', 'about', 'services-adus'）
 * @param id - 脚本元素的 ID
 * @returns 用于 Next.js Script 组件的属性对象
 */
export function getJsonLdScript(
  pageKey: string,
  id: string = "json-ld"
): {
  id: string;
  type: string;
  dangerouslySetInnerHTML: { __html: string };
} | null {
  const data = jsonLd[pageKey];

  if (!data) return null;

  return {
    id,
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data),
    },
  };
}

/**
 * 在页面中使用 JSON-LD 的示例：
 *
 * import Script from 'next/script';
 * import { getJsonLdScript } from '@/data/json-ld';
 *
 * export default function HomePage() {
 *   return (
 *     <>
 *       <Script {...getJsonLdScript('home')} />
 *       // 页面内容
 *     </>
 *   );
 * }
 *
 * // 在 ADU 服务页面:
 * // <Script {...getJsonLdScript('services-adus')} />
 */
