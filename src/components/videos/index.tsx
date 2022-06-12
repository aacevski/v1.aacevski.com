import { VStack, Heading, Grid, GridItem } from '@chakra-ui/react';

import VideoCard from '~components/video-card';
import videos from '~constants/videos';

const Videos = () => {
  return (
    <VStack w="full" align="flex-start">
      <Heading>videos</Heading>]
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        gap={10}
      >
        {videos.map((video) => (
          <GridItem key={video.url} flex={1} h="full">
            <VideoCard {...video} />
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};

export default Videos;
