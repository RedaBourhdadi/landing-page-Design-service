import { ContactButton } from '@/components/common/contact-button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

interface ADUProject {
	slug: string;
	title: string;
	description: string;
	coverImage: string;
	location: string;
	squareFeet: number;
	projectType:
		| 'Detached ADU'
		| 'Attached ADU'
		| 'Garage Conversion'
		| 'Junior ADU';
}

const aduProjects: ADUProject[] = [
	{
		slug: 'modern-backyard-adu-san-francisco',
		title: 'Modern Backyard ADU in San Francisco',
		description:
			'A contemporary 650 sq ft detached ADU with high ceilings, abundant natural light, and a space-efficient open floor plan.',
		coverImage:
			'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbiUyMGZyYW1pbmd8ZW58MHx8fHwxNzQxNzcxMDYyfDA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'San Francisco, CA',
		squareFeet: 650,
		projectType: 'Detached ADU',
	},
	{
		slug: 'garage-conversion-adu-los-angeles',
		title: 'Stylish Garage Conversion ADU in Los Angeles',
		description:
			'A 480 sq ft garage conversion transformed into a modern living space with custom storage solutions and high-end finishes.',
		coverImage:
			'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBBRFUlMjBhY2Nlc3NvcnklMjBkd2VsbGluZyUyMHVuaXQlMjBkZXNpZ258ZW58MHx8fHwxNzQxNzcxMDQzfDA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Los Angeles, CA',
		squareFeet: 480,
		projectType: 'Garage Conversion',
	},
	{
		slug: 'attached-adu-san-diego',
		title: 'Seamless Attached ADU in San Diego',
		description:
			'An 800 sq ft attached ADU featuring a private entrance, one bedroom, and an expansive living area with indoor-outdoor flow.',
		coverImage:
			'https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmFsJTIwZW5naW5lZXJpbmclMjBmb3VuZGF0aW9uJTIwcmVwYWlyfGVufDB8fHx8MTc0MTc3MTA1MHww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'San Diego, CA',
		squareFeet: 800,
		projectType: 'Attached ADU',
	},
	{
		slug: 'junior-adu-oakland',
		title: 'Compact Junior ADU in Oakland',
		description:
			'A 400 sq ft junior ADU within the main house footprint, featuring efficient design and multi-functional furniture.',
		coverImage:
			'https://images.unsplash.com/photo-1481026469463-66327c86e544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMHBlcm1pdCUyMGFwcGxpY2F0aW9uJTIwcHJvY2Vzc3xlbnwwfHx8fDE3NDE3NzEwNTN8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Oakland, CA',
		squareFeet: 400,
		projectType: 'Junior ADU',
	},
	{
		slug: 'luxury-detached-adu-palo-alto',
		title: 'Luxury Detached ADU in Palo Alto',
		description:
			'A high-end 750 sq ft detached ADU with premium fixtures, smart home technology, and sustainable building materials.',
		coverImage:
			'https://images.unsplash.com/photo-1481277542470-605612bd2d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVtb2RlbGluZyUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fHx8MTc0MTc3MTA0N3ww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Palo Alto, CA',
		squareFeet: 750,
		projectType: 'Detached ADU',
	},
	{
		slug: 'mid-century-adu-sacramento',
		title: 'Mid-Century Modern ADU in Sacramento',
		description:
			'A 600 sq ft detached ADU inspired by mid-century design with clean lines, large windows, and indoor-outdoor living spaces.',
		coverImage:
			'https://images.unsplash.com/photo-1542733819-2b9351e80d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcmVzdGF1cmFudCUyMGRlc2lnbiUyMGludGVyaW9yfGVufDB8fHx8MTc0MTc3MTA2Nnww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Sacramento, CA',
		squareFeet: 600,
		projectType: 'Detached ADU',
	},
];

export function ADUShowcase() {
	return (
		<section className="py-16 bg-[#FFFDF7]">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">
					Featured ADU Projects
				</h2>
				<p className="text-gray-500 max-w-3xl mb-12">
					Explore our recently completed ADU projects throughout California.
					Each design showcases our dedication to quality, functionality, and
					aesthetic excellence.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{aduProjects.map((project, index) => (
						<Link
							key={project.slug}
							href={`/projects/${project.slug}`}
							className={`group ${index > 2 ? 'hidden md:block' : ''}`}
						>
							<article className="space-y-4 bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg overflow-hidden">
								<div className="relative aspect-[4/3] overflow-hidden">
									<Image
										src={project.coverImage}
										alt={project.title}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-105"
										sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
									/>
									<Badge
										variant="secondary"
										className="absolute top-4 left-4 bg-white"
									>
										{project.projectType}
									</Badge>
								</div>
								<div className="p-4 space-y-2">
									<div className="flex justify-between items-center text-sm text-gray-500">
										<span>{project.location}</span>
										<span>{project.squareFeet} sq ft</span>
									</div>
									<h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
										{project.title}
									</h3>
									<p className="text-gray-600 text-sm line-clamp-2">
										{project.description}
									</p>
								</div>
							</article>
						</Link>
					))}
				</div>

				<div className="mt-12 text-center">
					<ContactButton buttonText="Get A Free ADU Template" />
				</div>
			</div>
		</section>
	);
}
