import './globals.css'
import type { Metadata } from 'next'
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: 'Twitter clone',
  description: 'Twitter clone built with Next.js and Supabase'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
