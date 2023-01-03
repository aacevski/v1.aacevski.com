import { Heading, useColorModeValue as mode } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

import { BIRTHDAY } from '~constants/general';

const Age = () => {
  const [age, setAge] = useState(dayjs().diff(dayjs(BIRTHDAY), 'year', true));

  useEffect(() => {
    const interval = setInterval(() => {
      const ageOld = dayjs().diff(dayjs(BIRTHDAY), 'year', true);

      setAge(ageOld);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Heading
      cursor="help"
      size="sm"
      pos="relative"
      _hover={{
        _after: {
          content: '"ps aux | grep age"',
          fontWeight: '400',
          width: 'max-content',
          position: 'absolute',
          top: '100%',
          left: 0,
          bg: mode('white', 'black'),
          p: 2,
          borderRadius: 'md',
          fontSize: 'xs',
        },
      }}
    >
      {age.toFixed(8)}

    </Heading>
  );
};

export default Age;
