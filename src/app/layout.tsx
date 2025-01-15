import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono
} from 'next/font/google';
import './globals.css';
import HeaderComponent from '@/components/header/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BetoFoxNet_Info',
  description: 'Empresa de Desenvolvimento de App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt_BR'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}