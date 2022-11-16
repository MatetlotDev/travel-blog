import { ThemeProvider } from '@emotion/react';
import { Montserrat } from '@next/font/google';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { defaultTheme } from '../utils/theme';

const montserrat = Montserrat();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}

export default MyApp;
