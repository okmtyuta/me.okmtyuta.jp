import { NextRequest, NextResponse } from 'next/server'

type RequestBody = { accessToken: string }
type User = {
  sub: number
  username: string
  iat: number
  exp: number
}

export async function POST(request: NextRequest) {
  const body: RequestBody = await request.json()

  const response = await fetch(`${process.env.AUTH_URL}/auth/profile`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${body.accessToken}`
    }
  })

  if (response.status === 401) {
    return NextResponse.json({
      loginRequired: true
    })
  }

  const user: User = await response.json()

  return NextResponse.json({
    loginRequired: false,
    user: user
  })
}
