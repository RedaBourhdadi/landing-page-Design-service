import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/**
 * 将MDX内容序列化为可在客户端渲染的格式
 * @param content MDX字符串内容
 * @returns 序列化后的MDX内容
 */
export async function serializeMDX(content: string) {
	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [remarkGfm], // 支持GitHub风格的Markdown (表格、删除线等)
			rehypePlugins: [
				rehypeSlug, // 为标题添加id
				[rehypeAutolinkHeadings, { behavior: 'wrap' }], // 为标题添加链接
			],
		},
	});

	return mdxSource;
}
