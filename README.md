# 利用（予定）ドメイン

- https://auth.api.me.okmtyuta.jp: 認証用のREST API @ https://render.com with NestJS
- https://auth.me.okmtyuta.jp: 認証関連のページ @ https://vercel.com with Next.js
- https://console.api.me.okmtyuta.jp: コンソール用のAPI // 未作成
- https://comsole.me.okmtyuta.jp: コンソール系のページ with Remix // 未作成
- https://blog.api.me.okmtyuta.jp: ブログのAPI // 未作成
- https://blog.me.okmtyuta.jp: ブログのページ with Next.js // 未作成

ドメインはRoute53で管理している。

> 将来的にはバックエンドはHeroku，フロントエンドはVercelで運用したい。

# PORTS

// 未設定
| service | port |
| - | - |
| api/auth | 4001 |
| client/auth | 5001 |

# .env

- DATABASE_URL: prismaで利用するDATABASE_URL
- JWT_SECRET: 認証で利用するJWT_SECRET
- API_AUTH_PORT: api/authのポート
- CLIENT_AUTH_PORT: client/authのポート
