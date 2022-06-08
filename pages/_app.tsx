import React from 'react';
import '@fontsource/poppins';
import '@fontsource/chakra-petch';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default MyApp;
