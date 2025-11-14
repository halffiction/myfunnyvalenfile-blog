import Link from 'next/link'
import { getPostsByCategory, getAllCategories } from '@/lib/posts'
import { notFound } from 'next/navigation'
import PostCard from '@/components/PostCard'

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    category: encodeURIComponent(category),
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  // URL 인코딩된 카테고리 이름을 디코딩
  const decodedCategory = decodeURIComponent(params.category)
  const posts = getPostsByCategory(decodedCategory)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <Link 
          href="/blog"
          style={{
            display: 'inline-block',
            marginBottom: '1rem',
            color: 'var(--accent)',
            textDecoration: 'none',
            fontSize: '0.9rem',
          }}
        >
          ← 목록으로 돌아가기
        </Link>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '0.5rem',
          fontWeight: '700'
        }}>
          카테고리: {decodedCategory}
        </h1>
        <p style={{ 
          color: 'var(--text-secondary)',
          fontSize: '1.1rem'
        }}>
          {posts.length}개의 포스트
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            post={post}
            href={`/blog/${post.slug}`}
          />
        ))}
      </div>
    </div>
  )
}

