import {
  Container,
  HStack,
  useColorMode,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import Age from '~components/age';
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
      bg={mode('rgba(255, 255, 255, 0.2)', 'rgba(30, 30, 30, 0.8)')}
      p={4}
      backdropFilter="blur(10px)"
    >
      <Container
        alignItems="center"
        justifyContent="space-between"
        display="flex"
        maxW="container.md"
      >
        <Age />
        <ColorModeSwitch size="sm" onClick={toggleColorMode} />
      </Container>
    </HStack>
  );
};

export default Header;
