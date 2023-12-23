import type { Metadata } from 'next';
import './style/globals.css';

import Header from './components/Header';

export const metadata: Metadata = {
  title: 'Peek Weather',
  description: 'A weather app for the curious.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`bg-primary`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
