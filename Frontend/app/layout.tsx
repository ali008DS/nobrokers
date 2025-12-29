import type { Metadata } from 'next'
import './globals.css'
import ConditionalFooter from '@/components/ConditionalFooter'

export const metadata: Metadata = {
  title: 'NoBroker - Property Search',
  description: 'Find your perfect property',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ConditionalFooter />
      </body>
    </html>
  )
}

