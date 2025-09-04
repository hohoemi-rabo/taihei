# 011: Supabase 初期設定

## 概要
バックエンド機能としてSupabaseを導入し、データベーススキーマを定義してCRUD操作の準備を行う。

## 作業内容

### Todo

#### Supabaseプロジェクト作成
- [ ] Supabaseプロジェクトの作成
- [ ] 環境変数の設定
  - [ ] SUPABASE_URL
  - [ ] SUPABASE_ANON_KEY
- [ ] パッケージのインストール
  - [ ] @supabase/supabase-js
  - [ ] @supabase/auth-helpers-nextjs

#### データベーススキーマ定義
- [ ] お知らせテーブル (news)
  - [ ] id (uuid, primary key)
  - [ ] title (text)
  - [ ] content (text)
  - [ ] category (enum: important, classroom, event)
  - [ ] is_published (boolean)
  - [ ] created_at (timestamp)
  - [ ] updated_at (timestamp)
- [ ] スケジュールテーブル (schedules)
  - [ ] id (uuid, primary key)
  - [ ] day_of_week (int 0-6)
  - [ ] start_time (time)
  - [ ] end_time (time)
  - [ ] class_name (text)
  - [ ] description (text)
  - [ ] target_age (text)
  - [ ] capacity (int)
  - [ ] is_active (boolean)
- [ ] お問い合わせテーブル (contacts)
  - [ ] id (uuid, primary key)
  - [ ] name (text)
  - [ ] email (text)
  - [ ] message (text)
  - [ ] inquiry_type (enum)
  - [ ] created_at (timestamp)

#### Supabaseクライアント設定
- [ ] lib/supabase.ts ファイル作成
- [ ] クライアントインスタンス作成
- [ ]型定義ファイル生成
- [ ] Database型の設定

#### RLS (Row Level Security) 設定
- [ ] テーブルのRLS有効化
- [ ] 読み取り権限の設定
- [ ] 管理者権限の設定準備

## 技術要件
- TypeScriptでの型安全性
- セキュリティ設定の適切な構成
- 本番環境での設定準備

## 完了条件
- [ ] Supabaseプロジェクトが作成されている
- [ ] テーブルスキーマが定義されている
- [ ] 接続テストが成功する
- [ ] 型定義が生成されている