import { Fixed, Alert } from '@okmtyuta/amatelas/server'
import { Dispatch, SetStateAction } from 'react'

type Alerts = { label: string; content: string; key: string; variant: 'success' | 'error' }[]

export const Alerts = (props: { alerts: Alerts; setAlerts: Dispatch<SetStateAction<Alerts>> }) => {
  return (
    <Fixed positionalMargin={{ x: 'none' }}>
      {props.alerts.map((alert) => {
        return (
          <Alert key={alert.key} variant={alert.variant}>
            {alert.content}
          </Alert>
        )
      })}
    </Fixed>
  )
}
