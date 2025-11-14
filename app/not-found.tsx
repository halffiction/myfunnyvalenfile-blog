import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '4rem 2rem',
    }}>
      <h1 style={{
        fontSize: '4rem',
        fontWeight: '700',
        marginBottom: '1rem',
      }}>
        404
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: 'var(--text-secondary)',
        marginBottom: '2rem',
      }}>
        페이지를 찾을 수 없습니다.
      </p>
      <Link
        href="/"
        className="not-found-link"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--accent)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '500',
          transition: 'background-color 0.2s',
        }}
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}

