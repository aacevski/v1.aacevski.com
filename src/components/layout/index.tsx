import { PropsWithChildren } from 'react';
import { Container, VStack, useColorModeValue as mode } from '@chakra-ui/react';

import Header from './header';

type Props = PropsWithChildren<{}>;

// background-color: #121212;
// opacity: 1;
// background-image:  radial-gradient(#2e2e32 1.3px, transparent 1.3px), radial-gradient(#2e2e32 1.3px, #121212 1.3px);
// background-size: 52px 52px;
// background-position: 0 0,26px 26px;

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
      <Container
        d="flex"
        maxW="container.md"
        minH={{ base: 'auto', md: '100vh' }}
        centerContent
      >
        <VStack alignItems="stretch" flex={1} w="full" spacing={16}>
          <VStack as="main" flex={1} w="full" spacing={16}>
            {children}
          </VStack>
        </VStack>
      </Container>
    </VStack>
  );
};

export default Layout;
