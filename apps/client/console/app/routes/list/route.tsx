import { type MetaFunction, json } from '@remix-run/node'

import { Footer, Header } from '@okmtyuta/me.okmtyuta.jp.ui'
import { Frame, Title, List, ListItem } from '@okmtyuta/amatelas/server'

import '@okmtyuta/awesome-css/reset.css'
import '@okmtyuta/amatelas/style.css'
import '@okmtyuta/me.okmtyuta.jp.ui/style.css'

import { PrismaClient } from '@prisma/client'
import { useLoaderData } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export async function loader() {
  const prisma = new PrismaClient()
  const fbs = await prisma.feedback.findMany()
  prisma.$disconnect()
  return json(fbs)
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  return (
    <>
      <Header label="okmtyuta console" />
      <Frame>
        <Title>Create New Feedback</Title>
        <List>
          {data.map((datum) => {
            return <ListItem key={datum.id}>{datum.summary}</ListItem>
          })}
        </List>
      </Frame>
      <Footer />
    </>
  )
}
