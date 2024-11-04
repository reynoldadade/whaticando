import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from './components/Header'

const interSans = localFont({
  src: './fonts/InterVF.ttf',
  variable: '--font-inter-sans',
  weight: '100 600 700 900',
})
const interItalic = localFont({
  src: './fonts/InterItalicVF.ttf',
  variable: '--font-inter-italic',
  weight: '100 600 700 900',
})

export const metadata: Metadata = {
  title: "Rey's Portfolio",
  description: 'Nice use-cases to show off my skills',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} ${interItalic.variable} antialiased`}>
        <Header></Header>
        <main className="px-10">{children}</main>
      </body>
    </html>
  )
}
