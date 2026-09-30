# Dohoon Kim Portfolio

김도훈의 AI · Data Engineer 포트폴리오입니다. Next.js App Router와 TypeScript, Tailwind CSS로 구성하며 런타임 서버 없이 정적 파일로 출력됩니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## 검증 및 빌드

```bash
npm run lint
npm run type-check
npm run build
```

`npm run build`가 성공하면 정적 결과물이 `out/`에 생성됩니다.

## 콘텐츠 수정

- 프로필, 프로젝트, 경력, 기술, 자격, 활동: `src/content/portfolio.ts`
- 디자인 토큰과 반응형 스타일: `src/app/globals.css`
- 프로젝트 이미지 및 영상: `public/media/`
- 원본 콘텐츠 기준: `contents.md`
- 디자인 기준: `DESIGN.md`

실제 경력이나 성과를 임의로 만들지 말고 Notion 원본 및 코드 저장소에 근거해 수정합니다.

대표 프로젝트의 `media` 배열에 항목을 추가하면 카드의 미디어 슬라이드에 반영됩니다. 웹에 삽입하는 데모 영상은 현재 최대 4.88초 GIF로 변환해 사용하며, 원본 영상은 `Project_Assets/`에 보존합니다.

## Vercel 배포

1. 이 디렉터리를 Git 저장소로 만들고 원격 저장소에 push합니다.
2. Vercel에서 **Add New → Project**를 선택합니다.
3. 원격 저장소를 연결합니다.
4. Framework Preset이 `Next.js`, Build Command가 `npm run build`인지 확인합니다.
5. Deploy를 실행합니다.

`next.config.ts`의 `output: "export"` 설정으로 정적 사이트가 생성됩니다. 현재 프로젝트에는 환경 변수가 필요하지 않습니다.

## 현재 범위 밖

- 커스텀 도메인과 DNS
- 검색 엔진 등록 및 확장 SEO
- 방문 분석
- 별도의 Lighthouse 성능 최적화
- 백엔드 및 문의 폼
