/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineDocumentType } from 'contentlayer/source-files';
import GithubSlugger from 'github-slugger';

import { formatShortDate } from '../../src/utils/date';
import { Tag } from './tag';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    description: { type: 'string' },
    status: { type: 'enum', options: ['draft', 'published'], required: true },
    tags: {
      type: 'list',
      of: Tag,
    },
  },
  computedFields: {
    headings: {
      type: 'json',
      resolve: async (doc) => {
        // use same package as rehypeSlug so toc and sluggified headings match
        // https://github.com/rehypejs/rehype-slug/blob/main/package.json#L36
        const slugger = new GithubSlugger();

        // https://stackoverflow.com/a/70802303
        const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;

        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          // @ts-ignore
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              heading: flag?.length,
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          },
        );

        return headings;
      },
    },
    publishedAtFormatted: {
      type: 'string',
      resolve: (doc) => {
        return formatShortDate(doc.publishedAt);
      },
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName
        // hello-world.mdx => hello-world
        .replace(/\.mdx$/, ''),
    },
  },
}));
