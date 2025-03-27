import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export interface ArticleImage {
	url: string;
	width: number;
	height: number;
	alt: string;
}

export interface Article {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	category: 'Interior Design' | 'News' | 'Perspectives' | 'Insights';
	coverImage: string;
	content: string;
	readingTime: string;
	metadata: {
		title: string;
		description: string;
		keywords: string;
		openGraph: {
			title: string;
			description: string;
			url: string;
			type: string;
			images: ArticleImage[];
		};
	};
}

// 文章目录路径
const articlesDirectory = path.join(process.cwd(), 'src/data/articles');

// 获取所有文章数据
function getSortedArticlesData(): Article[] {
	// 获取 /data/articles 目录下的所有文件名
	const fileNames = fs.readdirSync(articlesDirectory);
	const allArticlesData = fileNames.map((fileName) => {
		// 从文件名中移除 ".md" 以获取 slug
		const slug = fileName.replace(/\.md$/, '');

		// 读取 markdown 文件内容
		const fullPath = path.join(articlesDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		// 使用 gray-matter 解析元数据和内容
		const matterResult = matter(fileContents);

		// 组合数据与 slug
		return {
			slug,
			content: matterResult.content,
			...(matterResult.data as Omit<Article, 'slug' | 'content'>),
		};
	});

	// 按日期排序
	return allArticlesData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

// 缓存文章数据
let articlesCache: Article[] | null = null;

// 获取所有文章数据
function getArticlesData(): Article[] {
	if (!articlesCache) {
		articlesCache = getSortedArticlesData();
	}
	return articlesCache;
}

// 获取所有文章 slugs，用于静态路径生成
export async function getAllArticleSlugs(): Promise<string[]> {
	const articles = getArticlesData();
	return articles.map((article) => article.slug);
}

// 获取所有文章，可用于文章列表页
export async function getAllArticles(): Promise<Article[]> {
	return getArticlesData();
}

// 根据 slug 获取特定文章
export async function getArticleBySlug(slug: string): Promise<Article | null> {
	const articles = getArticlesData();
	const article = articles.find((article) => article.slug === slug);
	return article || null;
}

// 获取相关文章（例如，同一类别的其他文章）
export async function getRelatedArticles(
	currentSlug: string,
	limit: number = 3
): Promise<Article[]> {
	const currentArticle = await getArticleBySlug(currentSlug);
	if (!currentArticle) return [];

	const articles = getArticlesData();
	return articles
		.filter(
			(article) =>
				article.slug !== currentSlug &&
				article.category === currentArticle.category
		)
		.slice(0, limit);
}

// 根据类别获取文章
export async function getArticlesByCategory(
	category: Article['category']
): Promise<Article[]> {
	const articles = getArticlesData();
	return articles.filter((article) => article.category === category);
}

// 获取最新文章
export async function getLatestArticles(limit: number = 3): Promise<Article[]> {
	const articles = getArticlesData();
	return articles.slice(0, limit);
}
