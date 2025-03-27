"use client";

import Image from "next/image";

// Team member data type
type TeamMember = {
  id: string;
  name: string;
  title: string;
  image: string;
  description?: string[];
  isPrimary?: boolean;
};

// All team members data including Mason
const teamMembers: TeamMember[] = [
  {
    id: "mason",
    name: "Reda B",
    title: "CEO & Chief Engineer & Founder",
    description: [
      "Reda B brings over two decades of engineering expertise to California's residential and commercial construction industry. After earning his civil engineering degree, he began his career at the Los Angeles Department of Water and Power in 2000, contributing to critical infrastructure projects throughout the city.",
      "Mason played a significant role in landmark projects including structural improvements at Los Angeles International Airport and major public facilities across Southern California. This experience provided him with comprehensive understanding of California's building codes and regulatory requirements.",

      "After years managing large-scale public infrastructure, Mason recognized the growing need for specialized residential design services. In 2019, he founded Cecilia Home, focusing his engineering expertise on creating innovative solutions for homeowners statewide. Under his leadership, the company has established an outstanding reputation across the Bay Area and expanded throughout California. His client-centered approach emphasizes clear communication, attention to detail, and personalized solutions that address each homeowner's unique needs while navigating California's complex building permit processes efficiently.",
      "Today, Mason leverages his unique background in both public infrastructure and residential design to deliver exceptional value to clients seeking ADUs, home additions, structural modifications, and permit services. His comprehensive understanding of California's building regulations and commitment to structural integrity ensure every project meets the highest standards of safety, functionality, and aesthetic appeal.",
    ],
    image: "/images/about/mason.jfif",
    isPrimary: true,
  },
  // {
  // 	id: 'member-a',
  // 	name: 'Sarah Chen',
  // 	title: 'Lead Architect',
  // 	image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  // },
  // {
  // 	id: 'member-b',
  // 	name: 'David Wang',
  // 	title: 'Project Manager',
  // 	image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  // },
  // {
  // 	id: 'member-c',
  // 	name: 'Emily Tan',
  // 	title: 'Interior Designer',
  // 	image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
  // },
  // {
  // 	id: 'member-d',
  // 	name: 'Michael Zhang',
  // 	title: 'Structural Engineer',
  // 	image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e',
  // },
  // {
  // 	id: 'member-e',
  // 	name: 'Jessica Liu',
  // 	title: 'Client Relations Manager',
  // 	image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
  // },
  // {
  // 	id: 'member-f',
  // 	name: 'Robert Chen',
  // 	title: 'Construction Manager',
  // 	image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a',
  // },
  // {
  // 	id: 'member-g',
  // 	name: 'Linda Huang',
  // 	title: 'Permit Specialist',
  // 	image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
  // },
  // {
  // 	id: 'member-h',
  // 	name: 'Tony Park',
  // 	title: 'CAD Designer',
  // 	image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  // },
];

// Team member card component
const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-md">
        <Image
          src={member.image}
          alt={`${member.name} - ${member.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Overlay with name and title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300">
          <h3 className="text-xl font-semibold text-white">{member.name}</h3>
          <p className="text-gray-200 text-sm">{member.title}</p>
        </div>
      </div>
    </div>
  );
};

const TeamsSection = () => {
  // Separate Mason (primary member) from other team members
  const primaryMember = teamMembers.find((member) => member.isPrimary);
  const otherMembers = teamMembers.filter((member) => !member.isPrimary);

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Featured Team Member - Mason */}
        {primaryMember && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-12 rounded-xl">
            {/* Photo - Half width on desktop */}
            <div className="relative">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={primaryMember.image}
                  alt={`${primaryMember.name} - ${primaryMember.title}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Overlay with name and title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {primaryMember.name}
                  </h3>
                  <p className="text-gray-200">{primaryMember.title}</p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="space-y-4">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Meet Our Team
                </h2>
                <p className="text-gray-600">
                  The dedicated professionals behind Cecilia Home combine
                  expertise, creativity, and passion to bring your vision to
                  life.
                </p>
              </div>
              {primaryMember.description?.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Other Team Members */}
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {otherMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
