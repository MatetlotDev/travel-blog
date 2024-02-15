// import { Footer, Menu } from 'app/ui';
import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';
import './styles/global.scss';

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
        {/* <Menu /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
