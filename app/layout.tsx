import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TASK MANAGER',
  description: 'Created by Bhumit Mittal',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
