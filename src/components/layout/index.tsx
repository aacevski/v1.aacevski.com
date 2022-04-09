import { PropsWithChildren } from 'react';
import { Container, VStack } from '@chakra-ui/react';

import Header from './header';

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  return (
    <>
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
    </>
  );
};

export default Layout;
