import { Container, Heading, HStack } from '@chakra-ui/react';

const Header = () => {
  return (
    <HStack
      as="nav"
      pos="sticky"
      top={0}
      align="center"
      justify="center"
      w="full"
      insetX={0}
      bg="white"
      p={4}
      backdropFilter="blur(24px)"
      borderBottom="#EDEDED 1px solid"
    >
      <Container
        alignItems="center"
        justifyContent="space-between"
        d="flex"
        maxW="container.md"
      >
        <Heading size="md">Andrej</Heading>
      </Container>
    </HStack>
  );
};

export default Header;
