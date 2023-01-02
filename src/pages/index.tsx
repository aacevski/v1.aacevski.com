import { Container, Heading, Text, VStack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('~components/hero'), { ssr: false });

const Home = () => {
  return (
    <VStack w="full" spacing={10}>
      <Container maxW="container.sm" centerContent>
        <VStack spacing={10}>
          <Hero />
          <VStack w="full" align="flex-start">
            {/* <Heading size="lg">projects</Heading>
            <Text color="paragraph" fontWeight="normal">
              a collection of my work & pet projects that helped me learn new
              things
            </Text> */}
          </VStack>
        </VStack>
      </Container>
    </VStack >
  );
};


export default Home;
