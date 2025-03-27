import { Badge } from '@/components/ui/badge';
import { getAllArticles } from '@/lib/articles';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Articles & Blog | Cecilia Home',
	description:
		'Explore our collection of articles about home design, architectural solutions, interior remodeling, and construction trends.',
	keywords:
		'home design articles, remodeling blog, construction insights, California architecture, kitchen design, bathroom remodeling, ADU designs, foundation repair',
};

export default async function ArticlesPage() {
	const articles = await getAllArticles();

	return (
		<div className="bg-background py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto mb-12 text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						Articles & Insights
					</h1>
					<p className="text-lg md:text-xl text-stone-600">
						Expert advice and inspirational ideas for your home design and
						remodeling projects
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
					{articles.map((article) => (
						<Link
							key={article.slug}
							href={`/articles/${article.slug}`}
							className="group rounded-lg overflow-hidden border border-stone-100 hover:shadow-md transition-shadow duration-300"
						>
							<div className="relative aspect-[4/3] overflow-hidden">
								<Image
									src={article.coverImage}
									alt={article.title}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
									sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
								/>
								<Badge
									variant="secondary"
									className="absolute top-4 left-4 bg-white"
								>
									{article.category}
								</Badge>
							</div>
							<div className="p-5">
								<div className="flex items-center justify-between text-sm text-stone-500 mb-3">
									<time>{article.date}</time>
									<span>{article.readingTime}</span>
								</div>
								<h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
									{article.title}
								</h2>
								<p className="text-stone-600 line-clamp-2">{article.excerpt}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
