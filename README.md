# Cursor Blog

정적 블로그 사이트 - GitHub Pages 호스팅용

## 기능

- ✅ 마크다운으로 글 작성
- ✅ 태그 및 카테고리 분류
- ✅ 월별 포스트 관리
- ✅ 반응형 디자인
- ✅ 아름다운 UI/UX

## 프로젝트 구조

```
cursor-blog/
├── app/              # Next.js App Router 페이지
│   ├── about/        # About 페이지
│   ├── blog/         # Blog 목록 및 개별 포스트
│   ├── tags/         # 태그별 필터링
│   └── categories/   # 카테고리별 필터링
├── content/
│   └── posts/        # 마크다운 포스트 파일
├── components/       # 재사용 가능한 컴포넌트
├── lib/              # 유틸리티 함수
└── public/           # 정적 자산
```

## 마크다운 포스트 작성 방법

`content/posts/` 폴더에 마크다운 파일을 생성하세요. 파일명은 URL slug로 사용됩니다.

각 파일은 frontmatter를 포함해야 합니다:

```markdown
---
title: "포스트 제목"
date: "2024-01-15"
tags: ["태그1", "태그2"]
categories: ["카테고리1"]
---

# 포스트 내용

여기에 마크다운 내용을 작성하세요.
```

## 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버는 `http://localhost:3000`에서 실행됩니다.

## 빌드

```bash
npm run build
```

빌드 결과물은 `out/` 폴더에 생성됩니다. 이 폴더의 내용을 GitHub Pages에 배포하면 됩니다.

## GitHub Pages 배포

### 방법 1: GitHub Actions (권장)

1. GitHub 저장소에 코드를 푸시
2. 저장소 Settings > Pages에서 Source를 "GitHub Actions"로 설정
3. `.github/workflows/deploy.yml` 파일이 자동으로 배포를 처리합니다

### 방법 2: 수동 배포

1. `npm run build` 실행
2. `out/` 폴더의 내용을 `gh-pages` 브랜치에 푸시
3. GitHub 저장소 Settings > Pages에서 `gh-pages` 브랜치를 선택

## 사용 기술

- Next.js 14 (App Router)
- TypeScript
- Remark (마크다운 파싱)
- date-fns (날짜 포맷팅)

