import { Box, VStack } from '@chakra-ui/react';

import Hero from '~components/hero';
import Videos from '~components/videos';

const Home = () => {
  return (
    <VStack w="full" spacing={10}>
      <Hero />
    </VStack>
  );
};

export default Home;

