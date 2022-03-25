import { AppProps } from 'next/app';
import './styles.css';
import React from 'react';
import { ThemeContext } from '../contexts';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <ThemeContext.Provider value="light">
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </main>
  );
}

export default CustomApp;
