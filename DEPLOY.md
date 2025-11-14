# GitHub Pages 배포 가이드

## 배포 설정 완료 ✅

다음 설정이 완료되었습니다:
- ✅ `next.config.js`에 `basePath: '/myfunnyvalenfile-blog'` 설정
- ✅ GitHub Actions 워크플로우 생성 (`.github/workflows/deploy.yml`)
- ✅ 정적 빌드 설정 완료

## 배포 단계

### 1. GitHub에 코드 푸시

터미널에서 다음 명령어를 실행하세요:

```bash
# 이미 Git 저장소가 초기화되어 있으므로, 다음 명령어만 실행하면 됩니다:
git push -u origin main
```

**인증이 필요한 경우:**
- Personal Access Token (PAT)을 사용하거나
- GitHub CLI를 사용하세요: `gh auth login`

### 2. GitHub Pages 설정

1. GitHub 저장소로 이동: https://github.com/halffiction/myfunnyvalenfile-blog
2. **Settings** > **Pages** 메뉴로 이동
3. **Source** 섹션에서:
   - **Source**: "GitHub Actions" 선택
   - 저장하면 자동으로 배포가 시작됩니다

### 3. 배포 확인

- GitHub Actions 탭에서 배포 진행 상황을 확인할 수 있습니다
- 배포가 완료되면 다음 URL에서 블로그를 확인할 수 있습니다:
  - `https://halffiction.github.io/myfunnyvalenfile-blog/`

## 자동 배포

이제 `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다!

## 로컬에서 테스트

배포 전에 로컬에서 테스트하려면:

```bash
npm run build
```

빌드 결과물은 `out/` 폴더에 생성됩니다.

## 문제 해결

### 배포가 실패하는 경우
1. GitHub Actions 탭에서 오류 로그 확인
2. `next.config.js`의 `basePath`가 저장소 이름과 일치하는지 확인
3. GitHub Pages 설정에서 Source가 "GitHub Actions"로 설정되어 있는지 확인

### 페이지가 404 오류가 나는 경우
- `basePath` 설정이 올바른지 확인
- 모든 링크가 상대 경로로 되어 있는지 확인 (이미 설정되어 있음)

