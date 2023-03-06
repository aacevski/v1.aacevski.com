/* eslint-disable import/no-extraneous-dependencies */
import { extendTheme, theme as base, ButtonProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#121212',
    },
  },
  semanticTokens: {
    colors: {
      paragraph: {
        default: 'blackAlpha.600',
        _dark: 'whiteAlpha.600',
      },
    },
  },
  fonts: {
    heading: `Poppins, ${base.fonts.heading}`,
    body: `Poppins, ${base.fonts.body}`,
  },
  components: {
    Button: {
      variants: {
        ghost: (props: ButtonProps) => ({
          _hover: {
            backgroundColor: mode('blackAlpha.200', 'whiteAlpha.200')(props),
            textDecoration: 'none',
          },
        }),
      },
    },
  },
});

export default theme;
