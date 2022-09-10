import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';
import SEO from '../next-seo.config';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
