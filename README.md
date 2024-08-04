## 概要

フロントエンドをNuxt.js、バックエンドapiをlaravel11でアプリケーション開発する際のspa認証の実装方法

- spa認証はsanctumで行う

## 開発環境

- nuxt 3.12.4
- vue 3.4.33

```text
/
├── components
├── composables    
├── layout
├── middleware
├── pages
├── plugins
├── public
├── store
├── types
├── utils
├── app.vue
├── error.vue
├── package.json
└── ts.config.json

```

## laravel側の用意
- laravel breezeをインストールし、sanctumを有効にする為、routes/api.phpを作成する
- envでSANCTUM_STATEFUL_DOMAINS、FRONTEND_URL、SESSION_DOMAINを設定する
- config/cors.phpを作成し、env設定読み込みとsupports_credentialsをtrueにする
- config/sanctum.phpのstatefulにenv設定を読み込む

## next.js側の用意
- nuxt.jsをインストール、登録・ログイン・ダッシュボード画面を作成する
- composables/useAuthに認証apiのカスタムフックを作成する
- utils/$larafetchに$fetchインスタンス設定を作成する
- plugins/authを作成し認証チェック
- middlewareに認証チェックのauthとguestを作成

## 流れ
- register、loginでlaravelにリクエスト送信
- sanctumからcsrfレスポンスが返り、ヘッダーに付与してlaravelに送信
- breezeで認証、nuxtでダッシュボードへリダイレクト、useStateにユーザー情報保存
- plugins/authで認証チェック、guradは各ページでauth/guestで行う
- logoutをリクエスト送信、breezeでログアウト処理、nuxtでloginへリダイレクト

## 注意点

- $fetchを使用する場合、credentialsをinclude、トークンはセットする必要がある



