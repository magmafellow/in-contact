import type { Metadata } from "next";
import localFont from "next/font/local";
import './reset.css'
import './globals.css'


const kantumruyPro = localFont({
  src: './Kantumruy/universal.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "In Contact",
  description: "The messanger, contact book and useful tool for You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kantumruyPro.className}`}>
        {children}
      </body>
    </html>
  );
}
