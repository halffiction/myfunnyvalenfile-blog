# Nicepage 호스팅 배포 가이드

## myfunnyvalenfile.com/blog에 배포하기

### 방법 1: 수동 업로드 (권장)

1. **빌드 설정 변경**
   - `next.config.js`에서 `basePath`를 `/blog`로 변경
   - 빌드 실행: `npm run build`
   - `out/` 폴더의 모든 내용을 Nicepage의 `/blog` 폴더에 업로드

2. **Nicepage에 업로드**
   - Nicepage 호스팅 관리 패널에 로그인
   - FTP/SFTP 또는 파일 관리자를 통해 접속
   - `out/` 폴더의 모든 파일과 폴더를 `/blog` 디렉토리에 업로드
   - 파일 구조:
     ```
     /blog/
       ├── index.html
       ├── about/
       ├── blog/
       ├── categories/
       ├── tags/
       ├── _next/
       └── carasoul-04.png
     ```

3. **접속 확인**
   - `https://myfunnyvalenfile.com/blog/`에서 확인

### 방법 2: 자동 배포 (FTP/SFTP 지원 시)

Nicepage가 FTP/SFTP를 지원한다면 GitHub Actions로 자동 배포할 수 있습니다.

### 주의사항

- `basePath`를 `/blog`로 변경해야 합니다
- Nicepage의 파일 업로드 제한을 확인하세요
- `.htaccess` 파일이 필요할 수 있습니다 (SPA 라우팅을 위해)

