import { ContactButton } from '@/components/common/contact-button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
export interface ServiceProject {
	slug: string;
	title: string;
	description: string;
	coverImage: string;
	location: string;
	squareFeet: number;
	projectType: string;
}

interface ServiceShowcaseProps {
	title: string;
	description: string;
	buttonText: string;
	serviceProjects: ServiceProject[];
}
export function ServiceShowcase({
	title,
	description,
	buttonText,
	serviceProjects,
}: ServiceShowcaseProps) {
	return (
		<section className="py-16 md:py-20 bg-secondary-background">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
				<p className="text-gray-500 max-w-3xl mb-12">{description}</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{serviceProjects.map((project, index) => (
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
					<ContactButton buttonText={buttonText} />
				</div>
			</div>
		</section>
	);
}
