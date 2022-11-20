import { Global, ThemeProvider } from '@emotion/react';
import { Montserrat } from '@next/font/google';
import type { AppProps } from 'next/app';
import { styles } from '../styles/globals';
import { defaultTheme } from '../styles/theme/theme';

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <ThemeProvider theme={defaultTheme}>
        <Global styles={styles} />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}

export default MyApp;
