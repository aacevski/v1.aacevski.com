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
    >
      <Container
        alignItems="center"
        justifyContent="space-between"
        d="flex"
        maxW="container.md"
      >
        <Heading>Hi</Heading>
      </Container>
    </HStack>
  );
};

export default Header;
