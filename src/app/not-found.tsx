import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Page Not Found | Cecilia Home',
	description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
	return (
		<div className="bg-white py-20 md:py-32">
			<div className="container mx-auto px-4 text-center">
				<h1 className="text-4xl md:text-6xl font-bold mb-6 text-stone-900">
					404
				</h1>
				<h2 className="text-2xl md:text-3xl font-medium mb-4 text-stone-700">
					Page Not Found
				</h2>
				<p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
					We couldn&apos;t find the page you were looking for. It may have been
					moved, deleted, or never existed.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Button asChild size="lg">
						<Link href="/">Return to Home</Link>
					</Button>
					<Button asChild variant="outline" size="lg">
						<Link href="/services">Explore Our Services</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
