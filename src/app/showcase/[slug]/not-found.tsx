import Link from 'next/link';

export default function ProjectNotFound() {
	return (
		<div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
			<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
				Project Not Found
			</h1>
			<p className="text-xl text-gray-600 mb-8 text-center max-w-md">
				The project you&apos;re looking for doesn&apos;t exist or has been
				moved.
			</p>
			<div className="flex flex-col sm:flex-row gap-4">
				<Link
					href="/showcases"
					className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 text-center"
				>
					Browse All Projects
				</Link>
				<Link
					href="/"
					className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-center"
				>
					Back to Home
				</Link>
			</div>
		</div>
	);
}
