'use client';

import { ThemeProvider } from '@emotion/react';
import { Footer, Menu } from 'app/ui';
import CarouselFullScreen from 'app/ui/CarouselFullScreen';
import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from 'state';
import { defaultTheme } from 'styles/theme/theme';
import './global.scss';

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
