import { getLatestArticles } from '@/lib/articles';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';

export async function Articles() {
	const articles = await getLatestArticles(3);

	return (
		<section className="py-16 md:py-20 bg-background">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold mb-12">Latest news</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{articles.map((article, index) => (
						<Link
							key={article.slug}
							href={`/articles/${article.slug}`}
							className={`group ${index > 2 ? 'hidden md:block' : ''}`}
						>
							<article className="space-y-4">
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
								<div className="space-y-2">
									<time className="text-sm text-gray-500">{article.date}</time>
									<h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
										{article.title}
									</h3>
								</div>
							</article>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
