'use client'
import { Fixed, TextField } from '@okmtyuta/amatelas/server'
import { ClientAlert } from '@okmtyuta/amatelas/client'
import { ReactNode, useState } from 'react'

import styles from './login.module.css'
import { LabelButton, Progress } from '@okmtyuta/amatelas'
import Link from 'next/link'

const Login = () => {
  const [username, setUsername] = useState<string>('alice')
  const [password, setPassword] = useState<string>('p@ssw0rd')
  const [alerts, setAlerts] = useState<{ label: string; content: string; key: string; variant: 'success' | 'error' }[]>(
    []
  )
  const [accessToken, setAccessToken] = useState<ReactNode>('未取得')

  return (
    <div>
      <Fixed positionalMargin={{ x: 'none' }}>
        {alerts.map((alert) => {
          return (
            <ClientAlert
              onDeleteClick={() => {
                setAlerts((current) => {
                  return current.filter((dalert) => {
                    return dalert.key !== alert.key
                  })
                })
              }}
              key={alert.key}
              variant={alert.variant}
              label={alert.label}
            >
              {alert.content}
            </ClientAlert>
          )
        })}
      </Fixed>
      <form>
        <div className={styles['inputs']}>
          <TextField
            autoComplete="name"
            helper="usernameはaliceです。"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            placeholder="username"
            variant="filled"
            defaultValue={username}
          />
          <TextField
            autoComplete="current-password"
            helper="パスワードはp@ssw0rdです。"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            placeholder="password"
            variant="filled"
            defaultValue={password}
          />
        </div>
        <LabelButton
          onClick={async () => {
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
            }
          }}
          color="success"
        >
          SUBMIT
        </LabelButton>
      </form>

      <div className={styles['access-token-div']}>
        <p>アクセストークンは</p>
        <p className={styles['access-token']}>{accessToken}</p>
        <p>です。</p>
        <p>アクセストークンが表示されてから60秒以内であれば他のページを閲覧することが可能です。</p>
        <p>
          <Link href="/">トップページ</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
