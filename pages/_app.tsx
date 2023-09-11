import { Global, ThemeProvider } from '@emotion/react';
import { Footer, Menu } from 'components';
import CarouselFullScreen from 'components/CarouselFullScreen';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
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
          <CarouselFullScreen />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </ThemeProvider>
    </main>
  );
}

export default MyApp;
