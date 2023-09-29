import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import Link from 'next/link'

import styles from './index.module.css'

const check = async () => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('ACCESS_TOKEN')?.value

  const res = await fetch('http://localhost:3000/check/api', {
    method: 'POST',
    cache: 'no-store',
    body: JSON.stringify({
      accessToken
    })
  })

  const data = await res.json()
  return data
}

const Page = async () => {
  const accessToken = cookies().get('ACCESS_TOKEN')?.value
  const data = await check()
  if (!data.ok) {
    redirect('/login')
  }

  const expire = new Date(data.exp * 1000).toString()
  return (
    <div className={styles['access-token-div']}>
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
