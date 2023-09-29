'use client'
import { ReactNode, useState } from 'react'
import Link from 'next/link'
import { redirect, useSearchParams } from 'next/navigation'

import { LabelButton, Progress } from '@okmtyuta/amatelas'
import { Alerts, UsernameTextField, PasswordTextField } from './_components'
import styles from './login.module.css'

type Alerts = { label: string; content: string; key: string; variant: 'success' | 'error' }[]

const Login = () => {
  const callbackURL = useSearchParams().get('callback') ?? "https://auth.me.okmtyuta.jp"
  const [logined, setLogined] = useState<boolean>(false)

  if (logined) {
    redirect(callbackURL)
  }

  const [username, setUsername] = useState<string>('alice')
  const [password, setPassword] = useState<string>('p@ssw0rd')
  const [alerts, setAlerts] = useState<Alerts>([])
  const [accessToken, setAccessToken] = useState<ReactNode>('未取得')

  const onClick = async () => {
    setAccessToken(<Progress />)

    const response = await fetch('/login/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    const data: { ok: false } | { ok: true; access_token: string } = await response.json()

    if (!data.ok) {
      setAlerts((current) => {
        return [
          ...current,
          { label: 'ERROR', content: 'Authentication Failed', key: crypto.randomUUID(), variant: 'error' }
        ]
      })
      setAccessToken('取得失敗')
    }

    if (data.ok) {
      setAlerts((current) => {
        return [
          ...current,
          { label: 'SUCCESS', content: 'Authentication Success', key: crypto.randomUUID(), variant: 'success' }
        ]
      })
      setAccessToken(data.access_token)
      setLogined(true)
    }
  }

  return (
    <div>
      <Alerts alerts={alerts} setAlerts={setAlerts} />
      <form>
        <div className={styles['inputs']}>
          <UsernameTextField setUsername={setUsername} defaultValue={username} />
          <PasswordTextField setPassword={setPassword} defaultValue={password} />
        </div>
        <LabelButton onClick={onClick} color="success">
          SUBMIT
        </LabelButton>
      </form>

      <div className={styles['access-token-div']}>
        <p>アクセストークンは</p>
        <p className={styles['access-token']}>{accessToken}</p>
        <p>です。</p>
        <p>アクセストークンが表示されてから20秒以内であれば他のページを閲覧することが可能です。</p>
        <p>
          <Link href="/">トップページ</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
