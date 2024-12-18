import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './reset.css'
import './globals.css'

const kantumruyPro = localFont({
  src: './Kantumruy/universal.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'In Contact',
  description: 'The messanger, contact book and useful tool for You',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="
https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js
"
        ></script>
        <link
          href="
https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css
"
          rel="stylesheet"
        />
      </head>
      <body className={`${kantumruyPro.className}`}>{children}</body>
    </html>
  )
}
