import { DefaultSeo } from "next-seo";

import { extendTheme, ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/layout";
import SEO from "../../next-seo.config";
const theme = extendTheme({
  fonts: {
    // body: "Poppins, -apple-system",
    // heading: "Poppins, -apple-system",
  },
});

const MyApp = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />

    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </>
);

export default MyApp;
