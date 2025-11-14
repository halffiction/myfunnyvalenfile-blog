// basePath를 처리하는 유틸리티
// GitHub Pages: '/myfunnyvalenfile-blog'
// Nicepage: '/blog'
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/blog'

export function withBasePath(path: string): string {
  // 이미 basePath가 포함되어 있으면 그대로 반환
  if (path.startsWith(basePath)) {
    return path
  }
  // 절대 경로인 경우 basePath 추가
  if (path.startsWith('/')) {
    return `${basePath}${path}`
  }
  // 상대 경로인 경우 그대로 반환
  return path
}

