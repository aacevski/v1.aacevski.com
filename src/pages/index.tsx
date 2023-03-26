import { Container, HStack, Icon, Stack, Text, VStack, useColorModeValue as mode } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

import { BlogPost } from '~types/blog-post';
import { Project } from '~types/project';
import { getBlogPosts } from '~utils/get-blog-posts';
import getProjects from '~utils/get-projects';
import randomUnderlineColor from '~utils/random-underline-color';

const Hero = dynamic(() => import('~components/hero'), { ssr: false });

type Props = {
  blogs: BlogPost[];
  projects: Project[];
};

const Home = ({ blogs, projects }: Props) => {
  return (
    <VStack w="full" spacing={10}>
      <Container maxW="container.sm" centerContent>
        <VStack spacing={10}>
          <Hero />
        </VStack>
        <VStack fontFamily="JetBrains Mono" w="full" mt={10} mb={10}>
          <Stack
            direction={['column', 'row']}
            spacing={10}
            justify="space-around"
            w="full"
          >
            <VStack w="full" h="full" alignItems="flex-start" spacing={4}>
              <Text color="paragraph">Projects</Text>
              {projects.map((project) => (
                <>
                  <HStack
                    mt={9}
                    transition="all 0.2s ease-in-out"
                    sx={{
                      '&:hover > *:first-child': {
                        textDecorationColor: randomUnderlineColor(),
                      },
                      '&:hover > *:last-child': {
                        color: mode('black', 'white'),
                        transform: 'scale(1.2)',
                      },
                    }}
                  >
                    <Text
                      as="a"
                      href={project.url}
                      target="_blank"
                      color={mode('black', 'white')}
                      textDecor="underline"
                      textDecorationStyle="wavy"
                      textDecorationColor="paragraph"
                      data-component-name="Link"
                      transition="all 0.2s ease-in-out"
                    >
                      {project.title}
                    </Text>
                    <Icon
                      data-component-name="Icon"
                      as={FiArrowUpRight}
                      color="paragraph"
                      transition="all 0.2s ease-in-out"
                    />
                  </HStack>
                  <Text color="paragraph" fontSize="sm" mt={2}>
                    {project.description}
                  </Text>
                </>
              ))}
            </VStack>
            <VStack w="full" h="full" alignItems="flex-start" spacing={4}>
              <Text color="paragraph">Blog</Text>
              {blogs.map((blog) => (
                <>
                  <HStack
                    mt={9}
                    transition="all 0.2s ease-in-out"
                    sx={{
                      '&:hover > *:first-child': {
                        textDecorationColor: randomUnderlineColor(),
                      },

                    }}
                  >
                    <Text
                      as={NextLink}
                      href={`/blog/${blog.slug}`}
                      color={mode('black', 'white')}
                      textDecor="underline"
                      textDecorationStyle="wavy"
                      textDecorationColor="paragraph"
                      data-component-name="Link"
                      transition="all 0.2s ease-in-out"
                    >
                      {blog.title}
                    </Text>
                  </HStack>
                  <Text color="paragraph" fontSize="sm" mt={2}>
                    {blog.description}
                  </Text>
                </>
              ))}
            </VStack>
          </Stack>
        </VStack>
      </Container>
    </VStack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getBlogPosts();
  const projects = await getProjects();

  return {
    props: {
      blogs: blogs.slice(0, 3),
      projects: projects.slice(0, 3),
    },
  };
};

export default Home;
