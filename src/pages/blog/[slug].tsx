/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Heading, HStack, Spinner, Stack, Text } from '@chakra-ui/react';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import readingTimeParser from 'reading-time';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import imageMetadata from 'plugins/image-metadata';
import MDXComponents from '~components/mdx-components';
import { BlogPost } from '~types/blog-post';
import { getBlogPosts } from '~utils/get-blog-posts';
import { readBlogPost } from '~utils/read-blog-post';
import useBlogPostViews from '~hooks/use-blog-post-views';

const TimeAgo = dynamic(() => import('~components/time-ago'), { ssr: false });

type Props = BlogPost & {
  source: MDXRemoteSerializeResult;
};

const BlogPostPage = ({
  source,
  title,
  readingTime,
  date,
}: Props) => {
  const { query } = useRouter();
  const slug = query.slug as string;

  const { views, increment: incrementViews, isLoading: isLoadingViews } = useBlogPostViews(slug);

  useEffect(() => {
    if (slug) {
      incrementViews();
    }
  }, [slug, incrementViews]);

  return (
    <Container maxW="container.lg" mb={10}>
      <Heading size="xl">
        {title}
      </Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        fontFamily="JetBrains Mono"
        mt={2}
        mb={8}
        divider={<HStack mx={2} />}
        fontSize="sm"
      >
        <TimeAgo date={date} />
        <Text>
          🕑
          {' '}
          {readingTime}
        </Text>
        {(isLoadingViews || !views) ? (
          <Box display="inline">
            👀
            {' '}
            Loading views...
          </Box>
        ) : (
          <Text>
            👀
            {' '}
            {views}
            {' '}
            views
          </Text>
        )}
        )
      </Stack>
      <MDXRemote lazy {...source} components={MDXComponents as any} />
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
      readingTime: readingTimeParser(content).text,
      title,
      description,
      date,
      slug,
    },
  };
};

export default BlogPostPage;
