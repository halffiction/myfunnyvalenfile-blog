'use client'

import Link from 'next/link'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { PostMetadata } from '@/lib/posts'

interface PostCardProps {
  post: PostMetadata
  href: string
}

export default function PostCard({ post, href }: PostCardProps) {
  return (
    <Link
      href={href}
      className="post-card"
      style={{
        display: 'block',
        padding: '1.5rem',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        textDecoration: 'none',
        color: 'var(--text-primary)',
        transition: 'all 0.2s',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <h3 style={{ 
        fontSize: '1.25rem', 
        marginBottom: '0.5rem',
        fontWeight: '600'
      }}>
        {post.title}
      </h3>
      <p style={{ 
        fontSize: '0.9rem', 
        color: 'var(--text-secondary)',
        marginBottom: '0.5rem'
      }}>
        {format(new Date(post.date), 'yyyy년 M월 d일', { locale: ko })}
      </p>
      {(post.tags && post.tags.length > 0) && (
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.75rem',
                padding: '0.25rem 0.75rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '12px',
                color: 'var(--text-secondary)',
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}

