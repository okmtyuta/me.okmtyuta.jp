import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const { username, password } = await request.json()
  const res = await fetch('http://localhost:3001/auth/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password }),
    cache: 'no-cache'
  })

  console.log(res.status)

  if (res.status === 200) {
    const signInResult = await res.json()
    const accessToken = signInResult.accessToken
    cookies().set('accessToken', accessToken, { secure: true })

    return Response.json({
      ok: true,
      signedIn: true
    })
  }

  switch (res.status) {
    case 404:
      return Response.json({
        ok: false,
        signedIn: false,
        error: 'ユーザーが見つかりませんでした'
      })
    case 401:
      return Response.json({
        ok: false,
        signedIn: false,
        error: 'パスワードが違います'
      })
    default:
      return Response.json({
        ok: false,
        signedIn: false,
        error: 'ログインに失敗しました'
      })
  }
}
