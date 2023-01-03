import { Image, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, useColorModeValue as mode } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
  src: string;
};

const LinkPreview = ({ children, src }: Props) => {
  const regex = src.match(/([^/]+)(?=\.\w+$)/); // Removes the file extension and gets the last /
  const altText = regex ? `Website for ${regex[0].replace(/-/g, ' ')}` : undefined; // Changes dashes with spaces

  return (
    <Popover trigger="hover" openDelay={0.5} closeDelay={0.2}>
      <PopoverTrigger>
        {children}
      </PopoverTrigger>
      <PopoverContent bg={mode('rgba(255, 255, 255, 1)', 'rgba(30, 30, 30, 1)')}>
        <PopoverArrow bg={mode('rgba(255, 255, 255, 1)', 'rgba(30, 30, 30, 1)')} />
        <PopoverBody>
          <Image w="full" src={src} alt={altText} />
        </PopoverBody>
      </PopoverContent>
    </Popover>

  );
};

export default LinkPreview;
