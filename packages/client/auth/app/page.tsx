import Link from 'next/link'
import styles from './index.module.css'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

type User = {
  sub: number
  username: string
  iat: number
  exp: number
}

const check = async () => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('ACCESS_TOKEN')?.value

  const response = await fetch(`${process.env.AUTH_URL}/profile/api`, {
    method: 'POST',
    cache: 'no-store',
    body: JSON.stringify({
      accessToken
    })
  })

  const data = await response.json()

  return NextResponse.json(data)
}

const Page = async () => {
  const checked = await check()

  const data: {
    loginRequired: boolean
    user: User
  } = await checked.json()

  if (data.loginRequired) {
    redirect(`/login?callback=${process.env.LOCATION}`)
  }

  const user = data.user
  const accessToken = cookies().get('ACCESS_TOKEN')?.value
  const expire = new Date(user.exp * 1000).toString()

  return (
    <div className={styles['access-token-div']}>
      <p>{user.username}でログインしています。</p>
      <p>現在のアクセストークンは</p>
      <p className={styles['access-token']}>{accessToken}</p>
      <p>です。このトークンは</p>
      <p className={styles['access-token']}>{expire}</p>
      <p>に失効します。</p>
      <p>
        <Link href="/login">ログイン</Link>
      </p>
    </div>
  )
}

export default Page
