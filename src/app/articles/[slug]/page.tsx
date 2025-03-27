import ArticleLayout from '@/components/articles/article-layout';
import { getAllArticleSlugs, getArticleBySlug } from '@/lib/articles';
import { serializeMDX } from '@/lib/mdx';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// 符合Next.js 15.2.2要求的参数类型
type PageProps = {
	params: Promise<{ slug: string }>;
};

// 为了静态生成，提供所有可能的路径
export async function generateStaticParams() {
	const slugs = await getAllArticleSlugs();
	return slugs.map((slug) => ({ slug }));
}

// 为每个页面生成元数据
export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const resolvedParams = await params;
	const article = await getArticleBySlug(resolvedParams.slug);

	if (!article) {
		return {
			title: 'Article Not Found | Cecilia Home',
		};
	}

	return article.metadata;
}

export default async function ArticlePage({ params }: PageProps) {
	const resolvedParams = await params;
	const article = await getArticleBySlug(resolvedParams.slug);

	if (!article) {
		notFound();
	}

	// 序列化MDX内容
	const mdxSource = await serializeMDX(article.content);

	return <ArticleLayout article={article} mdxSource={mdxSource} />;
}
