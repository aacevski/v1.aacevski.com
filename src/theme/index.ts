import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#121212",
      secondary: "#B1B1B1",
    },
  },
  fonts: {
    heading: `JetBrains Mono, ${base.fonts.heading}`,
    body: `JetBrains Mono, ${base.fonts.body}`,
  },
});

export default theme;
