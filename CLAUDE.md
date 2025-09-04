# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.2 application with TypeScript, using React 19.1.0 and Tailwind CSS 3.4.17 (downgraded from v4 for stability). The project was bootstrapped with create-next-app and uses Turbopack for faster builds.

## Key Commands

```bash
# Development
npm run dev        # Start development server with Turbopack on http://localhost:3000

# Production
npm run build      # Build for production with Turbopack
npm run start      # Start production server

# Code Quality
npm run lint       # Run ESLint
npx tsc --noEmit   # Type checking
```

## Architecture and Structure

### Application Structure
- **src/app/**: App Router directory containing pages and layouts
  - `layout.tsx`: Root layout with Geist fonts and global CSS
  - `page.tsx`: Home page component
  - `globals.css`: Global styles with Tailwind directives

### Styling Configuration
- **Tailwind CSS v3.4.17**: Using v3 directives (`@tailwind base/components/utilities`)
- **PostCSS**: Standard v3 configuration with tailwindcss and autoprefixer plugins
- Custom CSS variables for theming (`--background`, `--foreground`)

### TypeScript Configuration
- Target: ES2017
- Module: ESNext with bundler resolution
- Strict mode enabled
- Path alias: `@/*` maps to `./src/*`

## Important Technical Decisions

1. **Tailwind CSS Version**: Downgraded from v4 to v3.4.17 for stability with Next.js 15 and Turbopack
2. **Turbopack**: Using `--turbopack` flag for faster development and production builds
3. **React 19**: Using the latest React version (19.1.0) with Next.js 15

## Known Configuration Files

- `tailwind.config.js`: Tailwind v3 configuration with custom colors
- `postcss.config.mjs`: PostCSS configuration for Tailwind v3
- `eslint.config.mjs`: ESLint flat config using Next.js presets
- `tsconfig.json`: TypeScript configuration with Next.js plugin

## Dependencies Note

Type definitions for `@types/estree` and `@types/json-schema` have been installed to resolve TypeScript editor warnings (though they don't affect compilation).

## プロジェクト要件定義

### サイト概要
- **サイト名**: 泰平スタジオ - 飯田市の体操教室
- **目的**: 低学年の小学生からシニアまで幅広い年齢層向けの体操教室の情報発信
- **メインターゲット**: 低学年（6-9歳）の子供を持つ親世代（30-40代）
- **デプロイ先**: Vercel

### デザイン仕様
- **テーマ**: モダン＆プレイフル - 楽しく活動的な雰囲気
- **特徴**: グラデーション、丸みのあるデザイン、ポップなイラスト/アイコン
- **カラーパレット**:
  - primary: 明るいブルー系（空・爽やかさ）
  - secondary: ビビッドなオレンジ or イエロー（元気・活力）
  - accent: ピンク、グリーンなどのポップな補助色

### ページ構成
1. **トップページ（/）**:
   - ヒーローセクション（キャッチコピー＋メインビジュアル）
   - 概要セクション
   - 活動内容セクション（カラフルなカード形式）
   - 施設情報セクション
   - メディアセクション（YouTube/Facebook連携）
   - アクセスセクション（Google Maps）
   - お問い合わせフォーム

2. **スケジュールページ（/schedule）**:
   - 曜日別タイムテーブル
   - Supabaseでデータ管理

3. **講師プロフィールページ（/instructor）**

4. **お知らせページ（/news）** および詳細ページ（/news/[id]）:
   - Supabaseからデータ取得
   - カテゴリー分類とページネーション

### 技術スタック
- **フロントエンド**: Next.js 15 (App Router), TypeScript 5.x
- **スタイリング**: Tailwind CSS v3.4.17 + CSS Modules
- **アニメーション**: Framer Motion v11
- **状態管理**: Zustand v4
- **バックエンド**: Supabase
- **メール送信**: Resend API
- **アイコン**: Heroicons / Lucide React
- **フォント**: Next/Font (Noto Sans JP)

### 必須実装機能
1. **アニメーション**: Framer Motionでスクロールトリガー、パララックス効果
2. **レスポンシブデザイン**: PC優先設計、スマートフォン対応
3. **パフォーマンス最適化**: Next/Image、動的インポート、React.memo
4. **SNS連携**: シェアボタン（LINE、X、Facebook）、OGP設定
5. **お問い合わせフォーム**: バリデーション、Resend APIでメール送信

### 環境変数（Vercel設定）
- SUPABASE_URL
- SUPABASE_ANON_KEY
- RESEND_API_KEY
- FACEBOOK_ACCESS_TOKEN

## Next.js App Router ベストプラクティス

### ファイル構造と命名規則
```
src/app/
├── (marketing)/          # ルートグループ（URLに影響なし）
│   ├── page.tsx         # ページコンポーネント
│   ├── layout.tsx       # レイアウトコンポーネント
│   ├── loading.tsx      # ローディングUI
│   ├── error.tsx        # エラーバウンダリ
│   └── not-found.tsx    # 404ページ
├── api/                 # APIルート
│   └── route.ts         # HTTPメソッドハンドラ
└── components/          # 共有コンポーネント
```

### Server Components vs Client Components

#### Server Components（デフォルト）
- データフェッチ、バックエンド処理
- 大きなライブラリの使用
- 機密情報へのアクセス
```tsx
// app/page.tsx - Server Component
async function Page() {
  const data = await fetch('...') // サーバーで実行
  return <div>{data}</div>
}
```

#### Client Components（'use client'指定）
- インタラクティブな要素（onClick、onChange）
- ブラウザAPI使用（useState、useEffect）
- サードパーティのクライアントライブラリ
```tsx
// app/components/Button.tsx
'use client'
import { useState } from 'react'

export function Button() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### データフェッチのベストプラクティス

#### 1. Server Componentsでのフェッチ
```tsx
// 推奨：Server Componentで直接フェッチ
async function Page() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // ISR: 1時間ごとに再検証
  })
  const data = await res.json()
  return <div>{data}</div>
}
```

#### 2. Parallel Data Fetching
```tsx
// 並列フェッチで高速化
async function Page() {
  const [users, posts] = await Promise.all([
    fetch('/api/users').then(res => res.json()),
    fetch('/api/posts').then(res => res.json())
  ])
  return <div>...</div>
}
```

#### 3. Suspenseとストリーミング
```tsx
// loading.tsxと組み合わせて段階的レンダリング
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <SlowComponent />
    </Suspense>
  )
}
```

### メタデータ管理

#### 静的メタデータ
```tsx
export const metadata = {
  title: '泰平スタジオ',
  description: '飯田市の体操教室',
  openGraph: {
    title: '泰平スタジオ',
    description: '楽しく体を動かそう！',
    images: ['/og-image.jpg'],
  },
}
```

#### 動的メタデータ
```tsx
export async function generateMetadata({ params }) {
  const post = await getPost(params.id)
  return {
    title: post.title,
    description: post.description,
  }
}
```

### ルーティングパターン

#### 動的ルート
```tsx
// app/news/[id]/page.tsx
export default function NewsDetail({ params }: { params: { id: string } }) {
  return <div>News ID: {params.id}</div>
}
```

#### Route Groups（URLに影響なし）
```
app/
├── (marketing)/about/page.tsx  → /about
├── (shop)/products/page.tsx    → /products
└── (admin)/dashboard/page.tsx  → /dashboard
```

#### Parallel Routes
```tsx
// app/layout.tsx
export default function Layout({
  children,
  team,     // @team/page.tsx
  analytics // @analytics/page.tsx
}) {
  return (
    <>
      {children}
      {team}
      {analytics}
    </>
  )
}
```

### パフォーマンス最適化

#### 1. Image最適化
```tsx
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority // LCP画像に使用
  placeholder="blur" // ぼかしプレースホルダー
/>
```

#### 2. Font最適化
```tsx
import { Noto_Sans_JP } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})
```

#### 3. Dynamic Imports
```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false // クライアントサイドのみ
})
```

### エラーハンドリング

#### error.tsx（エラーバウンダリ）
```tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>エラーが発生しました</h2>
      <button onClick={() => reset()}>再試行</button>
    </div>
  )
}
```

#### not-found.tsx（404ページ）
```tsx
export default function NotFound() {
  return (
    <div>
      <h2>ページが見つかりません</h2>
      <Link href="/">ホームに戻る</Link>
    </div>
  )
}
```

### キャッシュ戦略

#### 1. Static Generation（デフォルト）
```tsx
// ビルド時に生成、CDNでキャッシュ
export default async function Page() {
  const data = await fetch('https://api.example.com/static')
  return <div>{data}</div>
}
```

#### 2. Incremental Static Regeneration
```tsx
// 定期的に再生成
const res = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 } // 60秒ごとに再検証
})
```

#### 3. Dynamic Rendering
```tsx
// リクエストごとに生成
const res = await fetch('https://api.example.com/data', {
  cache: 'no-store' // キャッシュ無効化
})
```

### セキュリティベストプラクティス

1. **環境変数の使い分け**
   - `NEXT_PUBLIC_*`: クライアント側で使用可能
   - その他: サーバー側のみ

2. **Server Actionsの使用**
```tsx
// app/actions.ts
'use server'

export async function createItem(data: FormData) {
  // サーバー側で実行される安全な処理
  const item = await db.create(data)
  revalidatePath('/items')
  return item
}
```

3. **CSRFプロテクション**: Server Actionsは自動的にCSRF保護

### 開発時の注意点

1. **use clientは必要最小限に**: パフォーマンスとSEOのため
2. **コンポーネントの粒度**: Server/Client境界を意識した設計
3. **エラー境界の設置**: 各ルートにerror.tsxを配置
4. **ローディング状態**: loading.tsxでUX向上
5. **型安全性**: TypeScriptの厳密な型定義

## チケット管理システム

### チケット構成
開発は3つのフェーズに分かれており、/docs配下にチケットファイルを配置：

#### フェーズ1: 基本実装 (001-006)
- **001**: 初期設定とカラーパレット設定
- **002**: トップページ基本実装
- **003**: スケジュールページ基本実装
- **004**: 講師紹介ページ基本実装
- **005**: お知らせ一覧ページ基本実装
- **006**: お知らせ詳細ページ基本実装

#### フェーズ2: デザイン実装 (007-010)
- **007**: 共通コンポーネントデザイン実装
- **008**: トップページデザイン実装
- **009**: その他ページデザイン実装
- **010**: アニメーション・UX実装

#### フェーズ3: バックエンド実装 (011-016)
- **011**: Supabase初期設定
- **012**: お問い合わせフォーム実装
- **013**: スケジュール管理機能実装
- **014**: お知らせ管理機能実装
- **015**: SNS連携・メディア統合
- **016**: Vercelデプロイ設定・本番運用準備

### Todo管理ルール

各チケットファイル内のTodoは以下の形式で管理：

```markdown
### Todo
- [ ] 未完了のタスク
- [×] 完了したタスク
```

**重要**: タスクが完了したら `- [ ]` を `- [×]` に変更してください。

### チケット実行順序
1. **基本実装**: 001→002→003→004→005→006
2. **デザイン実装**: 007→008→009→010
3. **バックエンド実装**: 011→012→013→014→015→016

各フェーズが完了してから次のフェーズに進むことで、効率的な開発が可能です。