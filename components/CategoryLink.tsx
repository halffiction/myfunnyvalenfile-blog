'use client'

import Link from 'next/link'

interface CategoryLinkProps {
  category: string
  href: string
}

export default function CategoryLink({ category, href }: CategoryLinkProps) {
  return (
    <Link
      href={href}
      className="category-link"
      style={{
        fontSize: '0.75rem',
        padding: '0.25rem 0.75rem',
        backgroundColor: 'var(--accent)',
        borderRadius: '12px',
        color: 'white',
        textDecoration: 'none',
        transition: 'all 0.2s',
      }}
    >
      {category}
    </Link>
  )
}

