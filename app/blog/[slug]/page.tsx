import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getPostSlugs } from '@/lib/posts'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import MarkdownContent from '@/components/MarkdownContent'
import TagLink from '@/components/TagLink'
import CategoryLink from '@/components/CategoryLink'

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug, true)

  if (!post || !post.htmlContent) {
    notFound()
  }

  return (
    <article>
      <Link 
        href="/blog"
        style={{
          display: 'inline-block',
          marginBottom: '2rem',
          color: 'var(--accent)',
          textDecoration: 'none',
          fontSize: '0.9rem',
        }}
      >
        ← 목록으로 돌아가기
      </Link>
      
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          fontWeight: '700',
          lineHeight: '1.2'
        }}>
          {post.title}
        </h1>
        
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          alignItems: 'center',
          marginBottom: '1rem',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem'
        }}>
          <time dateTime={post.date}>
            {format(new Date(post.date), 'yyyy년 M월 d일', { locale: ko })}
          </time>
        </div>

        {(post.tags && post.tags.length > 0) && (
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {post.tags.map((tag) => (
              <TagLink
                key={tag}
                tag={tag}
                href={`/tags/${encodeURIComponent(tag)}`}
              />
            ))}
          </div>
        )}

        {(post.categories && post.categories.length > 0) && (
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {post.categories.map((category) => (
              <CategoryLink
                key={category}
                category={category}
                href={`/categories/${encodeURIComponent(category)}`}
              />
            ))}
          </div>
        )}
      </header>

      <div style={{ 
        borderTop: '1px solid var(--border)',
        paddingTop: '2rem',
        marginTop: '2rem'
      }}>
        <MarkdownContent content={post.htmlContent} />
      </div>
    </article>
  )
}

