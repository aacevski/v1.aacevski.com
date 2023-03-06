import { Container, VStack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('~components/hero'), { ssr: false });

const Home = () => {
  return (
    <VStack w="full" spacing={10} fontFamily="JetBrains Mono">
      <Container maxW="container.sm" centerContent>
        <VStack spacing={10}>
          <Hero />
        </VStack>
      </Container>
    </VStack>
  );
};

export default Home;
