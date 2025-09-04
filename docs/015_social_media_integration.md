# 015: SNS連携・メディア統合

## 概要
YouTube動画埋め込み、Facebook連携、SNSシェア機能を実装し、ソーシャルメディアとの統合を図る。

## 作業内容

### Todo

#### YouTube動画埋め込み
- [ ] YouTube iframeの最適化
- [ ] レスポンシブな動画プレーヤー
- [ ] プライバシーモード (youtube-nocookie.com)
- [ ] 動画のLazy Loading
- [ ] 複数動画のギャラリー表示

#### Facebook連携
- [ ] Facebook Graph API統合準備
- [ ] 環境変数設定 (FACEBOOK_ACCESS_TOKEN)
- [ ] Facebook投稿の取得
- [ ] 投稿の表示コンポーネント作成
- [ ] エラーハンドリング

#### SNSシェアボタン
- [ ] LINE シェアボタン
- [ ] X (Twitter) シェアボタン
- [ ] Facebook シェアボタン
- [ ] シェア時のテキストカスタマイズ
- [ ] シェア数カウンター（オプション）

#### OGP最適化
- [ ] 動的OGP画像生成
- [ ] og:title, og:description の最適化
- [ ] Twitter Cards設定
- [ ] Facebook専用メタタグ

#### Instagram埋め込み（オプション）
- [ ] Instagram Basic Display API
- [ ] 写真ギャラリーの自動更新
- [ ] ハッシュタグフィード

## 技術要件
- Next.js Image でメディア最適化
- 外部API との安全な連携
- プライバシーとセキュリティの考慮
- パフォーマンス最適化

## 完了条件
- [ ] YouTube動画が適切に表示される
- [ ] Facebook連携が動作する（準備完了）
- [ ] SNSシェアボタンが機能する
- [ ] OGP設定が適切に動作する