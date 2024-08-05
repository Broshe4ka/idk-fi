import type { Metadata } from 'next'
import '../styles/global.scss'

export const metadata: Metadata = {
  title: 'idk-fi',
  description: 'Description',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='body'>{children}</body>
    </html>
  )
}
