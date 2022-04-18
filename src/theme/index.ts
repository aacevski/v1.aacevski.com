import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `JetBrains Mono, ${base.fonts.heading}`,
    body: `JetBrains Mono, ${base.fonts.body}`,
  },
});

export default theme;
