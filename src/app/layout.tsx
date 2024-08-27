import { ReactNode } from 'react';
import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'Accessibility Demo',
  description: 'Accessibility demonstration with IBM Carbon 11 and  Next.js 13',
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
