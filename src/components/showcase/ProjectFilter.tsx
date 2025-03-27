'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Project type definition
type Project = {
	title: string;
	type: string;
	image: string;
	slug: string;
};

// Props for the component
interface ProjectFilterProps {
	projectTypes: string[];
	projects: Project[];
}

export default function ProjectFilter({
	projectTypes,
	projects,
}: ProjectFilterProps) {
	// State to track the currently selected filter
	const [activeFilter, setActiveFilter] = useState<string>('All');

	// Filter projects based on selected type
	const filteredProjects =
		activeFilter === 'All'
			? projects
			: projects.filter((project) => project.type === activeFilter);

	return (
		<>
			{/* Filter buttons */}
			<div className="mb-10">
				<div className="flex flex-wrap gap-3">
					{projectTypes.map((type) => (
						<button
							key={type}
							className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors duration-200 ${
								activeFilter === type
									? 'bg-button-background text-white'
									: 'bg-gray-200 hover:bg-gray-300 text-gray-800'
							}`}
							onClick={() => setActiveFilter(type)}
						>
							{type}
						</button>
					))}
				</div>
			</div>
			{/* Projects grid with animation on filter change */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
				{filteredProjects.map((project) => (
					<div
						key={project.slug}
						className="project-card overflow-hidden   transition-all duration-300 rounded-lg"
					>
						<Link href={`/showcases/${project.slug}`} className="block group">
							<div className="relative overflow-hidden rounded-lg">
								<div className="aspect-[4/3] relative">
									<Image
										src={project.image}
										alt={project.title}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>
							</div>
							<div className="p-4">
								<h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
									{project.title}
								</h3>
								<p className="mt-1 text-gray-500">{project.type}</p>
							</div>
						</Link>
					</div>
				))}
			</div>
			{/* Message for no results */}
			{/* {filteredProjects.length === 0 && (
				<div className="text-center py-16">
					<p className="text-xl text-gray-500">
						No projects found for this category.
					</p>
					<button
						className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
						onClick={() => setActiveFilter('All')}
					>
						View all projects
					</button>
				</div>
			)} */}
		</>
	);
}
