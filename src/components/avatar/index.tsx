import { AvatarBadge, Avatar as ChakraAvatar, useColorModeValue as mode } from '@chakra-ui/react';
import useSWR from 'swr';

import { fetcher } from '~utils/fetcher';

const Avatar = () => {
  const { data } = useSWR<{ isPlaying: boolean; artist: string; title: string }>('/api/now-playing', fetcher);

  return (
    <ChakraAvatar
      alignSelf="flex-start"
      objectFit="cover"
      src="/assets/images/andrej.jpg"
      h={24}
      color={mode('black', 'white')}
      w={24}
    >
      {data?.isPlaying && (
        <AvatarBadge
          boxSize="1.4em"
          bg="green.500"
          borderColor={mode('#EDEDFA', '#121212')}
          _hover={{
            _after: {
              content: `'Listening to ${data.artist} -  ${data.title}'`,
              fontWeight: '400',
              width: { base: '150px', sm: 'max-content' },
              position: 'absolute',
              top: '100%',
              left: 0,
              bg: mode('white', 'black'),
              p: 2,
              borderRadius: 'md',
              fontSize: 'xs',
            },
          }}
        />
      )}
    </ChakraAvatar>
  );
};

export default Avatar;
