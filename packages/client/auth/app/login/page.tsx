'use client'
import { Button, Fixed, TextField } from '@okmtyuta/amatelas/server'
import { ClientAlert } from '@okmtyuta/amatelas/client'
import { redirect } from 'next/navigation'
import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [alerts, setAlerts] = useState<{ label: string; content: string; key: string }[]>([])
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
              variant="error"
              label={alert.label}
            >
              {alert.content}
            </ClientAlert>
          )
        })}
      </Fixed>
      <TextField
        helper="alice"
        onChange={(e) => {
          setUsername(e.target.value)
        }}
        placeholder="username"
        variant="filled"
      />
      <TextField
        helper="p@ssw0rd"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        type="password"
        placeholder="password"
        variant="filled"
      />
      <Button
        onClick={async () => {
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
              return [...current, { label: 'ERROR', content: 'Authentication Failed', key: crypto.randomUUID() }]
            })
          }
        }}
        color="success"
      >
        SUBMIT
      </Button>
    </div>
  )
}

export default Login
