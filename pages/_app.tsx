import { Global, ThemeProvider } from '@emotion/react';
import { Montserrat } from '@next/font/google';
import { Menu } from 'components';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'state';
import { styles } from 'styles/globals';
import { defaultTheme } from 'styles/theme/theme';

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <ThemeProvider theme={defaultTheme}>
        <Global styles={styles} />
        <Provider store={store}>
          <Menu />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </main>
  );
}

export default MyApp;
