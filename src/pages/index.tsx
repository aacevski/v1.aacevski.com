import { Container, Heading, Text, VStack } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import Hero from '~components/hero';
import { Project } from '~types/project';
import { readData } from '~utils/read-data';

type Props = {
  projects: Project[];
};

const Home = ({ projects }: Props) => {
  return (
    <VStack w="full" spacing={10}>
      <Container maxW="container.sm" centerContent>
        <VStack spacing={10}>
          <Hero />
          <VStack w="full" align="flex-start">
            <Heading size="lg">projects</Heading>
            <Text color="paragraph" fontWeight="normal">
              a collection of my work & pet projects that helped me learn new
              things
            </Text>
          </VStack>
        </VStack>
      </Container>
    </VStack >
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { projects } = await readData<{ projects: Project[] }>(
    'data/projects.json'
  );

  const props: Props = {
    projects,
  };

  return {
    props,
  };
};

export default Home;
