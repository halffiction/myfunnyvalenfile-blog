# Nicepage 호스팅 배포 가이드

## myfunnyvalenfile.com/blog에 배포하기

### 📋 준비 단계

1. **로컬에서 빌드 실행**
   ```bash
   npm run build
   ```
   - 이 명령어를 실행하면 `out/` 폴더에 정적 파일들이 생성됩니다
   - 이 `out/` 폴더의 내용을 Nicepage에 업로드해야 합니다

### 📤 Nicepage에 업로드하는 방법

#### 방법 1: Nicepage 파일 관리자 사용 (가장 쉬움)

1. **Nicepage 호스팅 관리 패널 접속**
   - myfunnyvalenfile.com 관리자 페이지에 로그인

2. **파일 관리자 또는 FTP 접속**
   - Nicepage 대시보드에서 "파일 관리" 또는 "FTP" 메뉴 찾기
   - 또는 "호스팅 관리" → "파일 관리자" 클릭

3. **blog 폴더 생성**
   - 루트 디렉토리(`/`)에 `blog` 폴더가 없으면 생성
   - 이미 있으면 그 폴더 사용

4. **파일 업로드**
   - 로컬 컴퓨터의 `out/` 폴더 내용을 모두 선택
   - Nicepage의 `/blog/` 폴더에 업로드
   - **중요**: `out` 폴더 자체가 아니라 `out` 폴더 **안의 내용**을 업로드해야 합니다
   
   올바른 구조:
   ```
   myfunnyvalenfile.com/
     └── blog/          ← 여기에 업로드
         ├── index.html
         ├── about/
         ├── blog/
         ├── categories/
         ├── tags/
         ├── _next/
         └── carasoul-04.png
   ```

5. **확인**
   - `https://myfunnyvalenfile.com/blog/` 접속해서 확인

#### 방법 2: FTP 클라이언트 사용 (FileZilla 등)

1. **FTP 클라이언트 설치** (FileZilla 추천)
2. **Nicepage에서 FTP 정보 확인**
   - 호스팅 관리 → FTP 정보 확인
   - 호스트, 사용자명, 비밀번호 확인
3. **FTP 접속**
   - FileZilla에서 FTP 정보 입력 후 연결
4. **파일 업로드**
   - 왼쪽(로컬): `out/` 폴더 내용 선택
   - 오른쪽(서버): `/blog/` 폴더로 이동
   - 드래그 앤 드롭으로 업로드

### ⚠️ 주의사항

- **GitHub의 소스 코드가 아닙니다!** 빌드된 `out/` 폴더의 내용을 업로드해야 합니다
- `basePath`가 `/blog`로 설정되어 있어야 합니다 (이미 설정됨)
- 모든 파일과 폴더를 업로드해야 합니다 (특히 `_next/` 폴더 중요!)
- 업로드 후 파일 권한이 올바른지 확인하세요

### 🔄 업데이트 방법

글을 수정하거나 새 글을 추가한 후:
1. `npm run build` 실행
2. `out/` 폴더의 변경된 파일만 업로드하거나 전체 재업로드
3. 또는 변경된 파일만 선택적으로 업로드

### ❓ 문제 해결

- **404 오류**: 파일 경로 확인, `basePath` 설정 확인
- **이미지 안 보임**: `_next/` 폴더와 이미지 파일 업로드 확인
- **스타일 안 보임**: `_next/static/` 폴더 업로드 확인
