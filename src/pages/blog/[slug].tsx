import { Container } from '@chakra-ui/react';
import { allPosts } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { getPartialPost } from '~utils/contentlayer';
import { components } from '~components/mdx-components';

const BlogPostPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Container maxW="container.lg" mb={10}>
      yo

      <MDXContent
        components={{ ...components }}
      />
    </Container>
  );
};

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: ReturnType<typeof getPartialPost>;
}> = async ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: getPartialPost(post, allPosts),
    },
  };
};

export default BlogPostPage;
