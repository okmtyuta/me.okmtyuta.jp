import { TextField } from '@okmtyuta/amatelas/server'
import { Dispatch, SetStateAction } from 'react'

export const PasswordTextField = (props: { setPassword: Dispatch<SetStateAction<string>>; defaultValue: string }) => {
  return (
    <TextField
      autoComplete="current-password"
      helper="パスワードはp@ssw0rdです。"
      onChange={(e) => {
        props.setPassword(e.target.value)
      }}
      type="password"
      placeholder="password"
      variant="filled"
      defaultValue={props.defaultValue}
    />
  )
}
