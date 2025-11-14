export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem',
      textAlign: 'center',
      color: 'var(--text-secondary)',
      marginTop: '4rem',
    }}>
      <p>© {new Date().getFullYear()} Cursor Blog. All rights reserved.</p>
    </footer>
  )
}

