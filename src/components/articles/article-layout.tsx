import { Badge } from '@/components/ui/badge';
import { Article, getRelatedArticles } from '@/lib/articles';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import { ArticleClient } from './article-client';

interface ArticleLayoutProps {
	article: Article;
	mdxSource: MDXRemoteSerializeResult;
}

export default async function ArticleLayout({
	article,
	mdxSource,
}: ArticleLayoutProps) {
	// 在服务端获取相关文章
	const relatedArticles = await getRelatedArticles(article.slug);

	return (
		<div className="bg-background">
			{/* 文章标题栏 */}
			<div className=" py-12 md:py-16">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<Badge className="mb-4" variant="outline">
							{article.category}
						</Badge>
						<h1 className="text-3xl md:text-5xl font-bold mb-6 text-stone-900">
							{article.title}
						</h1>
						<div className="flex items-center gap-2 text-stone-600 text-sm">
							<span>Published: {article.date}</span>
							<span>•</span>
							<span>{article.readingTime}</span>
						</div>
					</div>
				</div>
			</div>

			{/* 主要内容 */}
			<div className="container mx-auto px-4 py-8 md:py-12">
				<div className="max-w-4xl mx-auto">
					{/* 文章摘要 */}
					<div className="mb-8 md:mb-12 text-lg md:text-xl font-medium text-stone-700 border-l-4 border-primary pl-4 py-2">
						{article.excerpt}
					</div>

					{/* 主图 */}
					<div className="relative w-full aspect-[16/9] mb-10 rounded-lg overflow-hidden">
						<Image
							src={article.coverImage}
							alt={article.title}
							fill
							className="object-cover"
							priority
							sizes="(min-width: 1024px) 896px, (min-width: 768px) 672px, 100vw"
						/>
					</div>

					{/* 使用客户端组件渲染MDX内容和相关文章 */}
					<ArticleClient
						article={article}
						mdxSource={mdxSource}
						relatedArticles={relatedArticles}
					/>
				</div>
			</div>
		</div>
	);
}
