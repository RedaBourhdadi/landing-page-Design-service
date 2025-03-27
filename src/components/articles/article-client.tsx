'use client';

import { ContactButton } from '@/components/common/contact-button';
import { Button } from '@/components/ui/button';
import { Article } from '@/lib/articles';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import Link from 'next/link';
import { MDXContent } from './mdx-content';

interface ArticleClientProps {
	article?: Article;
	mdxSource: MDXRemoteSerializeResult;
	relatedArticles: Article[];
}

export function ArticleClient({
	mdxSource,
	relatedArticles,
}: ArticleClientProps) {
	return (
		<>
			{/* MDX内容 */}
			<MDXContent mdxSource={mdxSource} />

			{/* CTA 部分 */}
			<div className="mt-12 md:mt-16 bg-primary/5 border border-primary/10 rounded-xl p-6 md:p-8 text-center">
				<h3 className="text-2xl md:text-3xl font-bold mb-4">
					Ready to Transform Your Home?
				</h3>
				<p className="text-stone-700 mb-6 max-w-2xl mx-auto">
					Cecilia Home specializes in creating beautiful, functional spaces that
					incorporate the latest design trends while reflecting your personal
					style. Contact us today to discuss your project.
				</p>
				<div className="flex flex-col items-center sm:flex-row justify-center gap-4">
					<ContactButton
						buttonText="Request a Free Quote"
						className=" text-white"
					/>
					<Button asChild variant="ghost" className="">
						<Link href="/services">Explore Our Services</Link>
					</Button>
				</div>
			</div>

			{/* 相关文章 */}
			{relatedArticles.length > 0 && (
				<div className="mt-12 md:mt-16 border-t border-stone-200 pt-8">
					<h3 className="text-xl md:text-2xl font-bold mb-6">
						Related Articles
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{relatedArticles.map((relatedArticle) => (
							<Link
								key={relatedArticle.slug}
								href={`/articles/${relatedArticle.slug}`}
								className="group"
							>
								<div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-3">
									<Image
										src={relatedArticle.coverImage}
										alt={relatedArticle.title}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-105"
										sizes="(min-width: 768px) 224px, 100vw"
									/>
								</div>
								<h4 className="font-medium group-hover:text-primary transition-colors">
									{relatedArticle.title}
								</h4>
							</Link>
						))}

						{/* 如果相关文章不足3个，显示查看所有文章的按钮 */}
						{relatedArticles.length < 3 && (
							<div className="bg-stone-50 rounded-lg p-6 flex flex-col justify-center">
								<p className="text-stone-600 mb-4">
									Discover more insights about home design, renovation, and
									construction on our blog.
								</p>
								<Button asChild variant="outline" className="w-full">
									<Link href="/articles">View All Articles</Link>
								</Button>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
}
