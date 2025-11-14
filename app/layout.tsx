import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: "my funny valen file' blog",
  description: 'A beautiful static blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main style={{
          minHeight: 'calc(100vh - 200px)',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '2rem',
        }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

