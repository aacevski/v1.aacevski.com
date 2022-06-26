import { PropsWithChildren } from 'react';
import { Box, VStack, useColorModeValue as mode } from '@chakra-ui/react';

import Header from './header';

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  return (
    <VStack
      bgImage={mode(
        'radial-gradient(rgba(201, 201, 201, 0.7) 1.55px, rgba(229, 229, 247, 0.7) 1.55px)',
        'radial-gradient(#2E2E32 1.33px, #121212 1.33px)'
      )}
      bgSize="31px 31px"
    >
      <Header />
      <Box
        display="flex"
        w="full"
        minH={{ base: 'auto', md: '100vh' }}
      >
        <VStack alignItems="stretch" flex={1} w="full" spacing={16}>
          <VStack as="main" flex={1} w="full" spacing={16} pt={10}>
            {children}
          </VStack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Layout;
