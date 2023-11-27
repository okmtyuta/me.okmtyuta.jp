'use client'

import { Button, Flex, MaterialTextField, Modal, Progress, Snack, Textfield } from '@okmtyuta/amatelas-react/server'
import { useState } from 'react'
import { redirect, useSearchParams } from 'next/navigation'
import styles from './page.module.css'
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: '400',
  subsets: ['latin']
})

type SignInResult =
  | {
      ok: true
      signedIn: true
    }
  | {
      ok: false
      signedIn: false
      error: string
    }

const useSignIn = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [signedIn, setSignedIn] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  const searchParams = useSearchParams()
  const callbackURL = searchParams.get('callback')
  console.log(callbackURL)

  const signIn = async () => {
    setLoading(true)
    const res = await fetch('http://localhost:3000/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }),
      cache: 'no-cache'
    })
    const singInResult: SignInResult = await res.json()

    if (singInResult.signedIn) {
      setSignedIn(true)
    }

    if (!singInResult.ok) {
      setError(singInResult.error)
    }
    setLoading(false)
  }

  return {
    username,
    password,
    signedIn,
    error,
    loading,
    setUsername,
    setPassword,
    setSignedIn,
    setError,
    setLoading,
    callbackURL,

    signIn
  }
}

const SignInPage = () => {
  const { signedIn, setUsername, setPassword, signIn, error, callbackURL, loading, username, password } = useSignIn()

  if (signedIn && callbackURL) {
    return redirect(callbackURL)
  }
  if (signedIn && callbackURL == null) {
    return redirect('https://google.com')
  }
  if (loading) {
    return (
      <Flex justify="center" className={styles['sign-in-form']} gap="xs">
        <Flex className={anton.className}>OKMTYUTA AUTH</Flex>
        <Flex>
          <Progress />
        </Flex>
      </Flex>
    )
  }

  return (
    <>
      {loading ? (
        <Flex justify="center" className={styles['sign-in-form']} gap="xs">
          <Flex className={anton.className}>OKMTYUTA AUTH</Flex>
          <Flex>
            <Progress />
          </Flex>
        </Flex>
      ) : (
        <div className={styles['sign-in']}>
          <Flex justify="center" className={styles['sign-in-form']} gap="xs">
            <Flex className={anton.className}>OKMTYUTA AUTH</Flex>
            <MaterialTextField
              variant="outlined"
              placeholder="username"
              defaultValue={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
            <MaterialTextField
              variant="outlined"
              placeholder="password"
              defaultValue={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              helper={error}
            />
            <Flex align="center">
              <Button
                onClick={async () => {
                  signIn()
                }}
                color="info"
                variant="filled"
                width="md"
              >
                Sign In
              </Button>
            </Flex>
          </Flex>
        </div>
      )}
    </>
  )
}

export default SignInPage
