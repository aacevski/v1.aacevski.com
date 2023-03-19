/* eslint-disable no-param-reassign */
import { makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { Post } from './content/definitions/post';

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    esbuildOptions(options) {
      options.target = 'esnext';
      return options;
    },
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [
      [rehypeSlug],
      [rehypePrettyCode],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
        },
      ],
    ],
  },
});
