// Hey Emacs, this is -*- coding: utf-8 -*-

import type { AppProps } from 'next/app';
import '~/styles/globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
