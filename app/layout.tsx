import { Analytics } from '@vercel/analytics/react';
import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';
import '../styles/global.scss';
import SmoothScroll from './ui/SmoothScroll';

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
        {children}
        <Analytics />
        <SmoothScroll />
      </body>
    </html>
  );
}
