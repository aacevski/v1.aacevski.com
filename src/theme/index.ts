import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `IBM Plex Mono, ${base.fonts.heading}`,
    body: `IBM Plex Mono, ${base.fonts.body}`,
  },
});

export default theme;
