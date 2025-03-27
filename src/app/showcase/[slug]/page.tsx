import { projects } from '@/data/projects';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Generate static params for the page
export function generateStaticParams() {
	return projects.map((project) => ({
		slug: project.slug,
	}));
}

// Generate metadata for the page
export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		return {
			title: 'Project Not Found | Cecilia Home',
			description: 'The requested project could not be found.',
		};
	}

	return {
		title: `${project.title} | Cecilia Home`,
		description: project.description,
		keywords: `${project.type}, California, design, engineering, Cecilia Home`,
	};
}

export default async function ProjectDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	// 解析 params Promise 以获取 slug
	const { slug } = await params;

	// Find the project by slug
	const project = projects.find((p) => p.slug === slug);

	// If project not found, show 404
	if (!project) {
		notFound();
	}

	return (
		<main className="min-h-screen">
			{/* Hero image */}
			<div className="relative w-full h-[40vh] md:h-[60vh]">
				<Image
					src={project.image}
					alt={project.title}
					fill
					priority
					className="object-cover"
					sizes="100vw"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-10">
					<div className="container mx-auto">
						<div className="max-w-3xl">
							<Link
								href="/showcases"
								className="text-white hover:text-gray-200 inline-flex items-center mb-4"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 mr-2"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
										clipRule="evenodd"
									/>
								</svg>
								Back to Showcases
							</Link>
							<h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
								{project.title}
							</h1>
							<p className="text-gray-200 text-xl">{project.type}</p>
						</div>
					</div>
				</div>
			</div>

			{/* Project content */}
			<div className="container mx-auto px-4 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					{/* Left column - Description */}
					<div className="md:col-span-2">
						<div className="prose prose-lg max-w-none">
							<h2 className="text-3xl font-bold mb-6">Project Overview</h2>
							<p className="text-gray-700 mb-8 text-lg">
								{project.description}
							</p>

							{/* Gallery */}
							{project.gallery && project.gallery.length > 0 && (
								<>
									<h3 className="text-2xl font-bold mb-4">Project Gallery</h3>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
										{project.gallery.map((image, index) => (
											<div
												key={index}
												className="relative aspect-[4/3] overflow-hidden rounded-lg"
											>
												<Image
													src={image}
													alt={`${project.title} - Gallery image ${index + 1}`}
													fill
													className="object-cover hover:scale-105 transition-transform duration-300"
													sizes="(max-width: 768px) 100vw, 50vw"
												/>
											</div>
										))}
									</div>
								</>
							)}
						</div>
					</div>

					{/* Right column - Details */}
					{project.details && (
						<div>
							<div className="bg-gray-50 p-6 rounded-lg shadow-sm">
								<h3 className="text-xl font-bold mb-4">Project Details</h3>
								<div className="space-y-4">
									<div>
										<p className="text-gray-500 text-sm">Location</p>
										<p className="font-medium">{project.details.location}</p>
									</div>
									<div>
										<p className="text-gray-500 text-sm">Year Completed</p>
										<p className="font-medium">
											{project.details.yearCompleted}
										</p>
									</div>
									<div>
										<p className="text-gray-500 text-sm">Square Footage</p>
										<p className="font-medium">{project.details.sqft} sq ft</p>
									</div>
									<div>
										<p className="text-gray-500 text-sm">Services Provided</p>
										<ul className="list-disc list-inside">
											{project.details.services.map((service, index) => (
												<li key={index} className="font-medium">
													{service}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>

							{/* CTA */}
							<div className="mt-8 bg-primary text-white p-6 rounded-lg shadow-md">
								<h3 className="text-xl font-bold mb-2">
									Interested in a similar project?
								</h3>
								<p className="mb-4">Contact us today to discuss your ideas.</p>
								<Link
									href="/contact"
									className="inline-block bg-white text-primary font-medium py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200"
								>
									Get in Touch
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
