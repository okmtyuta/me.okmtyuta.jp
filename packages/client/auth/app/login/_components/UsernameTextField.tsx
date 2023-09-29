import { TextField } from '@okmtyuta/amatelas'
import { Dispatch, SetStateAction } from 'react'

export const UsernameTextField = (props: { setUsername: Dispatch<SetStateAction<string>>; defaultValue: string }) => {
  return (
    <TextField
      autoComplete="name"
      helper="usernameはaliceです。"
      onChange={(e) => {
        props.setUsername(e.target.value)
      }}
      placeholder="username"
      variant="filled"
      defaultValue={props.defaultValue}
    />
  )
}
