import rehypeShiki from '@shikijs/rehype';
import { transformerNotationHighlight } from '@shikijs/transformers';
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
			theme: 'houston',
			transformers: [
				transformerNotationHighlight({ matchAlgorithm: 'v3', classActiveLine: 'highlighted' })
			]
		})
		.use(rehypeStringify)
		.process(content);
