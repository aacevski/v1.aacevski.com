import { Button, Heading, HStack, Icon, Link, Text } from '@chakra-ui/react';

import { SocialLink } from '~types/social-links';
import socialLinks from '~constants/social-icons';

const Hero = () => {
  return (
    <>
      <Heading>
        full stack web developer, content creator, open source contributor
      </Heading>
      <Text color="paragraph" fontWeight="normal">
        I'm Andrej Acevski, a full stack web developer located in Macedonia. I
        actively contribute to open source and I'm currently a collaborator at
        Chakra UI. One of my biggest passions are video creation and spreading
        knowledge.
      </Text>
      <HStack w="full" spacing={1}>
        {socialLinks.map((socialLink: SocialLink) => (
          <Button
            as={Link}
            key={socialLink.href}
            href={socialLink.href}
            color={socialLink.color}
            target="_blank"
            variant="ghost"
          >
            <Icon fontSize="xl" as={socialLink.icon} />
          </Button>
        ))}
      </HStack>
    </>
  );
};

export default Hero;
