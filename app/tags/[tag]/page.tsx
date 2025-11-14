import Link from 'next/link'
import { getPostsByTag, getPostSlugs, getAllTags } from '@/lib/posts'
import { notFound } from 'next/navigation'
import PostCard from '@/components/PostCard'

export async function generateStaticParams() {
  const tags = getAllTags()
  // 빈 배열이면 빈 객체 반환 (빌드 오류 방지)
  if (tags.length === 0) {
    return []
  }
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag),
  }))
}

export default function TagPage({ params }: { params: { tag: string } }) {
  // URL 인코딩된 태그 이름을 디코딩
  const decodedTag = decodeURIComponent(params.tag)
  const posts = getPostsByTag(decodedTag)

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
          태그: #{decodedTag}
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

