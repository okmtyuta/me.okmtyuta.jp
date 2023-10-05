import { Fixed, ClientAlert } from '@okmtyuta/amatelas'
import { Dispatch, SetStateAction } from 'react'

type Alerts = { label: string; content: string; key: string; variant: 'success' | 'error' }[]

export const Alerts = (props: { alerts: Alerts; setAlerts: Dispatch<SetStateAction<Alerts>> }) => {
  return (
    <Fixed positionalMargin={{ x: 'none' }}>
      {props.alerts.map((alert) => {
        return (
          <ClientAlert
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
          </ClientAlert>
        )
      })}
    </Fixed>
  )
}
