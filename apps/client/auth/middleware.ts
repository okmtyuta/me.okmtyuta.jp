import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export const middleware = async (request: NextRequest) => {
  const callbackURL = request.nextUrl.searchParams.get('callback')
  const accessToken = cookies().get('accessToken')?.value
  const res = await fetch('http://localhost:3001/auth/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ accessToken }),
    cache: 'no-cache'
  })

  const json = await res.json()

  if (!json.ok) {
    return NextResponse.redirect(`http://localhost:3000/sign-in?callback=${callbackURL}`)
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/((?!api|sign-in|_next/static|_next/image|favicon.ico).*)'
}
