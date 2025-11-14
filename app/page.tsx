import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default function Home() {
  const posts = getAllPosts().slice(0, 5) // 최신 5개만 표시

  return (
    <div>
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ 
          marginBottom: '2.5rem',
          borderRadius: '12px',
          overflow: 'hidden',
          width: '25%',
          maxWidth: '25%',
          height: 'auto',
          margin: '0 auto'
        }}>
          <img
            src="/myfunnyvalenfile-blog/carasoul-04.png"
            alt="my funny valen file' blog"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
        <h3 style={{ 
          fontSize: '1.17rem', 
          marginBottom: '1rem',
          fontWeight: '600',
          lineHeight: '1.4',
          textAlign: 'center'
        }}>
          my funny valen file' blog에 오신 것을 환영합니다
        </h3>
      </section>

      <section>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '600' }}>최신 포스트</h2>
          <Link 
            href="/blog"
            style={{
              color: 'var(--accent)',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            전체 보기 →
          </Link>
        </div>

        {posts.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)' }}>아직 작성된 포스트가 없습니다.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                post={post}
                href={`/blog/${post.slug}`}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

