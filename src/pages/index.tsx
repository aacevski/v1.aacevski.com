import { Container, VStack } from '@chakra-ui/react';

import Hero from '~components/hero';


const Home = () => {
  return (
    <VStack w="full" spacing={10}>
      <Container maxW="container.sm" centerContent>
        <VStack spacing={10}>
          <Hero />
        </VStack>
      </Container>
    </VStack >
  );
};

export default Home;
