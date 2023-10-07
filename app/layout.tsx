import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ip address tracker',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${rubik.className} h-screen`}>{children}</body>
    </html>
  );
}
