import { getPostsByMonth } from '@/lib/posts'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import Sidebar from '@/components/Sidebar'
import PostCard from '@/components/PostCard'

export default function BlogPage() {
  const postsByMonth = getPostsByMonth()
  const monthKeys = Object.keys(postsByMonth).sort().reverse()

  return (
    <div style={{ 
      display: 'flex', 
      gap: '2rem', 
      alignItems: 'flex-start',
      flexDirection: 'column',
    }}
    className="blog-layout"
    >
      <div style={{ flex: 1, width: '100%' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Blog</h1>
      
      {monthKeys.length === 0 ? (
        <p style={{ color: 'var(--text-secondary)' }}>아직 작성된 포스트가 없습니다.</p>
      ) : (
        monthKeys.map((monthKey) => {
          const [year, month] = monthKey.split('-')
          const monthDate = new Date(parseInt(year), parseInt(month) - 1)
          const monthLabel = format(monthDate, 'yyyy년 M월', { locale: ko })
          
          return (
            <div key={monthKey} style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                color: 'var(--text-secondary)',
                fontWeight: '600'
              }}>
                {monthLabel}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {postsByMonth[monthKey].map((post) => (
                  <PostCard
                    key={post.slug}
                    post={post}
                    href={`/blog/${post.slug}`}
                  />
                ))}
              </div>
            </div>
          )
        })
      )}
      </div>
      <Sidebar />
    </div>
  )
}

