/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Heading } from '@chakra-ui/react';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';

import imageMetadata from 'plugins/image-metadata';
import MDXComponents from '~components/mdx-components';
import { BlogPost } from '~types/blog-post';
import { getBlogPosts } from '~utils/get-blog-posts';
import { readBlogPost } from '~utils/read-blog-post';

type Props = BlogPost & {
  source: MDXRemoteSerializeResult;
};

const BlogPostPage = ({
  source,
  title,
}: Props) => {
  return (
    <Container maxW="container.lg" mb={10}>
      {/* TODO: fixme */}
      <Heading size="lg">
        {title}
      </Heading>
      <MDXRemote {...source} components={MDXComponents as any} />
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogPosts();

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx?.params?.slug as string;

  const postContent = await readBlogPost(slug);
  const {
    content,
    data: { title, description, date },
  } = matter(postContent);

  return {
    props: {
      source: await serialize(content, {
        mdxOptions: {
          rehypePlugins: [imageMetadata],
        },
      }),
      readingTime: readingTime(content).text,
      title,
      description,
      date,
      slug,
    },
  };
};

export default BlogPostPage;
