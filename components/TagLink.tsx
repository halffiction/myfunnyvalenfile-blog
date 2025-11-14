'use client'

import Link from 'next/link'

interface TagLinkProps {
  tag: string
  href: string
  variant?: 'default' | 'accent'
}

export default function TagLink({ tag, href, variant = 'default' }: TagLinkProps) {
  return (
    <Link
      href={href}
      className={variant === 'accent' ? 'tag-link-accent' : 'tag-link'}
      style={{
        fontSize: '0.75rem',
        padding: '0.25rem 0.75rem',
        backgroundColor: variant === 'accent' ? 'var(--accent)' : 'var(--bg-secondary)',
        borderRadius: '12px',
        color: variant === 'accent' ? 'white' : 'var(--text-secondary)',
        textDecoration: 'none',
        transition: 'all 0.2s',
      }}
    >
      #{tag}
    </Link>
  )
}

