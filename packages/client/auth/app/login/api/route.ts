import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

type RequestBody = { username: string; password: string }
type ResponseBody = { access_token: string }

export async function POST(request: NextRequest) {
  const body: RequestBody = await request.json()

  const result = await fetch(`${process.env.AUTH_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ username: body.username, password: body.password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!result.ok) {
    return NextResponse.json({ ok: false })
  }

  const data: ResponseBody = await result.json()
  cookies().set('ACCESS_TOKEN', data.access_token)
  return NextResponse.json({ ok: true, ...data })
}
