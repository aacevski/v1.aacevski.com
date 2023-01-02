import {
  Container, Heading, HStack,
  useColorMode,
  useColorModeValue as mode
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useEffect, useMemo, useRef, useState } from 'react';

import ColorModeSwitch from '~components/color-mode-switch';

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const [age, setAge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const birth = dayjs('1999-08-09');
      const diff = now.diff(birth, 'year', true);

      setAge(diff);

    }, 100);

    return () => clearInterval(interval);
  }, []);



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
        <Heading
          cursor="help"
          size="sm"
          pos="relative"
          _hover={{
            _after: {
              content: '"getAge()"',
              position: 'absolute',
              top: '100%',
              left: 0,
              bg: mode('white', 'black'),
              p: 2,
              borderRadius: 'md',
              fontSize: 'xs',
            }
          }}>{age.toFixed(8)}</Heading>
        <ColorModeSwitch size="sm" onClick={toggleColorMode} />
      </Container>
    </HStack>
  );
};

export default Header;
