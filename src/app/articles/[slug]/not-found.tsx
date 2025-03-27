import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ArticleNotFound() {
	return (
		<div className="bg-white py-20 md:py-32">
			<div className="container mx-auto px-4 text-center">
				<h1 className="text-4xl md:text-6xl font-bold mb-6 text-stone-900">
					Article Not Found
				</h1>
				<p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
					We couldn&apos;t find the article you were looking for. It may have
					been moved, deleted, or never existed.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Button asChild size="lg">
						<Link href="/articles">Browse All Articles</Link>
					</Button>
					<Button asChild variant="outline" size="lg">
						<Link href="/">Return to Home</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
