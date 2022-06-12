import { extendTheme, theme as base, ButtonProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#121212",
    },
  },
  semanticTokens: {
    colors: {
      paragraph: {
        default: 'blackAlpha.600',
        _dark: 'whiteAlpha.600',
      },
    }
  },
  fonts: {
    heading: `JetBrains Mono, ${base.fonts.heading}`,
    body: `JetBrains Mono, ${base.fonts.body}`,
  },
  components: {
    Button: {
      variants: {
        ghost: (props: ButtonProps) => ({
          _hover: {
            backgroundColor: mode('blackAlpha.200', 'whiteAlpha.200')(props),
            textDecoration: 'none'
          },
        })
      }
    }
  }
});

export default theme;
