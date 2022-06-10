import { VStack, Heading, Text, Button, Icon, HStack, Link } from '@chakra-ui/react';
import { BsTwitter, BsGithub, BsYoutube } from 'react-icons/bs';

const socialLinks = [
  {
    href: 'https://twitter.com/aacevski',
    icon: BsTwitter,
    color: 'twitter.500',
  },
  {
    href: 'https://github.com/aacevski',
    icon: BsGithub,
    color: 'white',
  },
  {
    href: 'https://www.youtube.com/channel/UC_d5a-Bz_GENXkDUbIGqwxg',
    icon: BsYoutube,
    color: 'red.500'
  }
]

const Home = () => {
  return <VStack w="full" >
    <Heading>full stack web developer, content creator, open source contributor</Heading>
    <Text color="#B1B1B1">I'm Andrej Acevski, a full stack web developer located in Macedonia.
      I actively contribute to open source and I'm currently a collaborator at Chakra UI.
      One of my biggest passions are video creation and spreading knowledge.</Text>
    <HStack w="full">
      {socialLinks.map((socialLink) => (
        <Button as={Link} key={socialLink.href} href={socialLink.href}
          color={socialLink.color} target="_blank"
          variant="ghost">
          <Icon fontSize="2xl" as={socialLink.icon} />
        </Button>
      ))}
    </HStack>
  </VStack>;
};

export default Home;

