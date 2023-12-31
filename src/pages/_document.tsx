// Hey Emacs, this is -*- coding: utf-8 -*-

import { Head, Html, Main, NextScript } from 'next/document';

const CustomDocument = (): JSX.Element => {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="static/images/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default CustomDocument;
