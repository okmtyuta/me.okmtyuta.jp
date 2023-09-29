import { NextRequest, NextResponse } from 'next/server'

type RequestBody = { accessToken: string }

export async function POST(request: NextRequest) {
  const body: RequestBody = await request.json()

  const result = await fetch(`${process.env.AUTH_URL}/auth/check`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${body.accessToken}`
    }
  })
  const data = await result.json()
  if (!data.ok) {
    return NextResponse.json({ ok: false })
  }
  return NextResponse.json(data)
}
