import type { Metadata } from 'next';
import { Lexend, Figtree } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

const lexendSans = Lexend({
  variable: '--font-lexend-sans',
  subsets: ['latin'],
});
const figtree = Figtree({
  variable: '--font-figtree-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'James Basketball League',
  description: "James' basketball league stats tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexendSans.variable} ${figtree.variable} antialiased bg-zinc-900 text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
