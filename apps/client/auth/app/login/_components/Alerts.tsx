import { Fixed, Alert } from '@okmtyuta/amatelas/server'
import { Dispatch, SetStateAction } from 'react'

type Alerts = { label: string; content: string; key: string; variant: 'success' | 'error' }[]

export const Alerts = (props: { alerts: Alerts; setAlerts: Dispatch<SetStateAction<Alerts>> }) => {
  return (
    <Fixed positionalMargin={{ x: 'none' }}>
      {props.alerts.map((alert) => {
        return (
          <Alert
            onDelete={() => {
              props.setAlerts((current) => {
                return current.filter((dalert) => {
                  return dalert.key !== alert.key
                })
              })
            }}
            key={alert.key}
            variant={alert.variant}
            summary={alert.label}
          >
            {alert.content}
          </Alert>
        )
      })}
    </Fixed>
  )
}
