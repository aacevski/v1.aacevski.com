import {
  Button,
  Container,
  Heading,
  HStack,
  useColorMode,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import ColorModeSwitch from '~components/color-mode-switch';

const Header = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack
      as="nav"
      pos="sticky"
      top={0}
      align="center"
      justify="center"
      w="full"
      insetX={0}
      bg={mode('white', '#1E1E1E')}
      p={4}
      backdropFilter="blur(24px)"
    >
      <Container
        alignItems="center"
        justifyContent="space-between"
        d="flex"
        maxW="container.md"
      >
        <Heading fontWeight="500" fontSize="21px">
          Andrej
        </Heading>
        <ColorModeSwitch onClick={toggleColorMode} />
      </Container>
    </HStack>
  );
};

export default Header;
