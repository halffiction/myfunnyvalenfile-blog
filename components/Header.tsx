'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(path)
  }

  return (
    <header style={{
      borderBottom: '1px solid var(--border)',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          color: 'var(--accent)',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--accent-hover)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--accent)'
        }}
        >
          my funny valen file' blog
        </Link>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}>
          <Link href="/" style={{
            textDecoration: 'none',
            color: isActive('/') ? 'var(--accent)' : 'var(--text-primary)',
            fontWeight: isActive('/') ? '600' : '500',
            paddingBottom: '0.5rem',
            borderBottom: isActive('/') ? '2px solid var(--accent)' : '2px solid transparent',
            transition: 'all 0.2s',
          }}>
            Home
          </Link>
          <Link href="/about" style={{
            textDecoration: 'none',
            color: isActive('/about') ? 'var(--accent)' : 'var(--text-primary)',
            fontWeight: isActive('/about') ? '600' : '500',
            paddingBottom: '0.5rem',
            borderBottom: isActive('/about') ? '2px solid var(--accent)' : '2px solid transparent',
            transition: 'all 0.2s',
          }}>
            About
          </Link>
          <Link href="/blog" style={{
            textDecoration: 'none',
            color: isActive('/blog') ? 'var(--accent)' : 'var(--text-primary)',
            fontWeight: isActive('/blog') ? '600' : '500',
            paddingBottom: '0.5rem',
            borderBottom: isActive('/blog') ? '2px solid var(--accent)' : '2px solid transparent',
            transition: 'all 0.2s',
          }}>
            Blog
          </Link>
        </div>
      </nav>
    </header>
  )
}

