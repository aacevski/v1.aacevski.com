import {
  Button,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  chakra,
  VStack,
  Image,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import socialLinks from '~constants/social-icons';

const Hero = () => {
  return (
    <VStack spacing={8}>
      <VStack spacing={4}>
        <Image
          alignSelf="flex-start"
          alt="An image of Andrej"
          objectFit="cover"
          rounded="full"
          src="/assets/images/andrej.jpg"
          h={24}
          w={24}
        />
        <Heading alignSelf="start">Andrej Acevski</Heading>
        <Heading size="sm" alignSelf="start">
          full stack web developer, open source advocate
        </Heading>
        <Text color="paragraph" fontWeight="normal">
          located in{' '}
          <chakra.span
            textDecoration="underline"
            textDecorationStyle="wavy"
            textDecorationColor="purple.500"
            color={mode('black', 'white')}
            _hover={{
              textDecorationColor: mode('purple.700', 'purple.300'),
            }}
          >
            Macedonia
          </chakra.span>
          . Active contributor to open source and a collaborator at{' '}
          <chakra.span
            textDecoration="underline"
            textDecorationStyle="wavy"
            color={mode('black', 'white')}
            textDecorationColor="green.500"
            _hover={{
              textDecorationColor: mode('green.700', 'green.300'),
            }}
          >
            Chakra UI
          </chakra.span>
          . With a passion for video creation and knowledge sharing.
        </Text>
      </VStack>
      <HStack w="full" spacing={4}>
        {socialLinks.map((socialLink) => (
          <Button
            as={Link}
            key={socialLink.href}
            href={socialLink.href}
            color={socialLink.color}
            target="_blank"
            variant="ghost"
            leftIcon={<Icon fontSize="xl" as={socialLink.icon} />}
          >
            {socialLink.name}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};

export default Hero;
