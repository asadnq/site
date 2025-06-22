import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
// import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

export const transformContent = async (content: string) =>
	await unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkRehype)
		.use(rehypeShiki, {
			// theme: 'tokyo-night'
			// theme: 'kanagawa-wave'
			theme: 'houston'
		})
		.use(rehypeStringify)
		.process(content);
