# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명 / 함수명**: 영어 (코드 표준 준수)

## 명령어

```bash
npm run dev          # Vite 개발 서버 시작
npm run build        # 타입 체크 + Vite 프로덕션 빌드
npm run lint         # ESLint 실행
npm run preview      # 프로덕션 빌드 로컬 미리보기
npm run barrel       # src/shared/ui/index.ts 배럴 파일 자동 생성
npm run storybook    # Storybook 개발 서버 (포트 6006)
npm run build-storybook  # Storybook 빌드
```

## 아키텍처

React 19 + TypeScript + Vite + Tailwind CSS v4 기반의 FSD(Feature-Sliced Design) 영감을 받은 레이어 구조:

```
src/
  app/          # 앱 셸: 전역 스타일, 레이아웃(Header/Footer), 라우팅
  pages/        # 라우트 단위 페이지 컴포넌트 (home, category/*, article, notfound)
  shared/
    lib/cn/     # Tailwind 클래스 병합 유틸리티 (clsx + tailwind-merge)
    ui/
      atoms/    # 기본 컴포넌트 (Button, Badge, Checkbox, Input, Select)
      molecules/ # 합성 컴포넌트 (Article, Card, Dialog, Pagination)
      index.ts  # 자동 생성 배럴 파일 — 수동 편집 금지
```

**경로 별칭** (`vite.config.ts`와 `tsconfig.app.json` 양쪽에 정의):
- `@/` → `src/`
- `@app/` → `src/app/`
- `@pages/` → `src/pages/`
- `@shared/` → `src/shared/`

## 핵심 컨벤션

**배럴 파일 (`src/shared/ui/index.ts`)은 자동 생성됩니다.** `atoms/` 또는 `molecules/` 하위에 컴포넌트를 추가하거나 제거한 후 반드시 `npm run barrel`을 실행해 재생성하세요. 수동 편집 금지.

**컴포넌트 스타일링**은 CVA(`class-variance-authority`)로 변형(variant)을 정의하고, `@shared/lib/cn`의 `cn()` 함수로 Tailwind 클래스를 병합합니다. Tailwind CSS v4는 `@tailwindcss/vite` 플러그인으로 통합되며 별도의 `tailwind.config` 파일이 없습니다.

**Storybook** 스토리 파일은 컴포넌트 파일 옆에 위치합니다 (`*.stories.tsx`). 사용 애드온: vitest, a11y, docs, Chromatic, MCP.

**TypeScript**는 엄격 모드: `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `noFallthroughCasesInSwitch` 모두 활성화. 타겟은 ES2023.
