import Link from 'next/link'
import { getAllTags, getAllCategories } from '@/lib/posts'

export default function Sidebar() {
  const tags = getAllTags()
  const categories = getAllCategories()

  return (
    <aside style={{
      width: '100%',
      maxWidth: '250px',
      padding: '1.5rem',
      backgroundColor: 'var(--bg-secondary)',
      borderRadius: '12px',
      height: 'fit-content',
      position: 'sticky',
      top: '100px',
    }}
    className="sidebar"
    >
      {categories.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: 'var(--text-primary)',
          }}>
            카테고리
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/categories/${encodeURIComponent(category)}`}
                className="sidebar-category-link"
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  transition: 'all 0.2s',
                }}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      )}

      {tags.length > 0 && (
        <div>
          <h3 style={{
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: 'var(--text-primary)',
          }}>
            태그
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${encodeURIComponent(tag)}`}
                className="sidebar-tag-link"
                style={{
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: '12px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}

