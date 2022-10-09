import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ColorModeScript } from '@chakra-ui/react';

import { theme } from '../src/utils/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
