import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import Layout from '~components/layout';
import theme from '~theme';

import '../../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="Andrej Acevski"
        description="Software engineer, content creator, and open source contributor."
        twitter={{
          cardType: 'summary_large_image',
          handle: '@aacevski',
        }}
        openGraph={{
          url: 'http://aacevski.com',
          title: 'Andrej Acevski',
          description:
            'Software engineer, content creator, and open source contributor.',
          locale: 'en_US',
          siteName: 'Andrej Acevski',
          images: [
            {
              url: 'https://aacevski.com/assets/images/social.jpg',
              width: 1200,
              height: 630,
              alt: 'Andrej Acevski',
              type: 'image/png',
            },
          ],
        }}
        robotsProps={{
          maxSnippet: 120,
          maxImagePreview: 'large',
          maxVideoPreview: -1,
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
