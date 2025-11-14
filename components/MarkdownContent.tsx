'use client'

interface MarkdownContentProps {
  content: string
  className?: string
}

export default function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <div
      className={`markdown-content ${className || ''}`}
      dangerouslySetInnerHTML={{ __html: content }}
      style={{
        lineHeight: '1.8',
      }}
    />
  )
}

