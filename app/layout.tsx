'use client';

import { Global, ThemeProvider } from '@emotion/react';
import { Footer, Menu } from 'components';
import CarouselFullScreen from 'components/CarouselFullScreen';
import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from 'state';
import { styles } from 'styles/globals';
import { defaultTheme } from 'styles/theme/theme';

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

interface Props {
  children: ReactNode;
}

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider theme={defaultTheme}>
          <Global styles={styles} />
          <Provider store={store}>
            <Menu />
            <CarouselFullScreen />
            {children}
            <Footer />
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
