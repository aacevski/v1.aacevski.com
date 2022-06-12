import { useEffect, useState } from 'react';
import {
  Box,
  VStack,
  Image,
  chakra,
  Link,
  HStack,
  useColorModeValue as mode,
} from '@chakra-ui/react';

type Props = {
  title: string;
  url: string;
  description: string;
  tags: string[];
};

const VideoCard = ({ title, url, description, tags }: Props) => {
  const [videoId, setVideoId] = useState<string | null>();

  useEffect(() => {
    const queryParams = url.split('?')[1];
    const params = new URLSearchParams(queryParams);
    setVideoId(params.get('v'));
  }, [url]);

  return (
    <VStack w="full" align="center" justify="center" h="full">
      <Box
        h="full"
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={mode('rgba(255, 255, 255, 1)', 'rgba(30, 30, 30, 1)')}
        maxW="sm"
      >
        <Image
          alt={`Thumbnail image for the ${title} video`}
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          fallbackSrc={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          objectFit="cover"
          w="full"
          h={64}
        />
        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color="brand.600"
              _dark={{
                color: 'brand.400',
              }}
            >
              <HStack>
                {tags.map((tag) => (
                  <chakra.span key={tag}>#{tag}</chakra.span>
                ))}
              </HStack>
            </chakra.span>
            <Link
              display="block"
              color="gray.800"
              _dark={{
                color: 'white',
              }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{
                color: 'gray.600',
                textDecor: 'underline',
              }}
            >
              {title}{' '}
            </Link>
            <chakra.p mt={2} fontSize="sm" color="paragraph">
              {description}
            </chakra.p>
          </Box>
        </Box>
      </Box>
    </VStack>
  );
};

export default VideoCard;
