import { type MetaFunction } from '@remix-run/node'

import { Footer, Header } from '@okmtyuta/me.okmtyuta.jp.ui'
import { Frame, Title, List, ListItem, Link } from '@okmtyuta/amatelas/server'

import '@okmtyuta/awesome-css/reset.css'
import '@okmtyuta/amatelas/style.css'
import '@okmtyuta/me.okmtyuta.jp.ui/style.css'

import { PrismaClient } from '@prisma/client'
import { Link as RemixLink, useLoaderData } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [{ title: 'okmtyuta console | Daily Feedback Create' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export const loader = async () => {
  const prisma = new PrismaClient()
  const dailyFeedbacks = await prisma.dailyFeedback.findMany()
  await prisma.$disconnect()
  return dailyFeedbacks
}

export default function Index() {
  const dailyFeedbacks = useLoaderData<typeof loader>()
  return (
    <>
      <Header label="okmtyuta console" />
      <Frame>
        <Title>Daily Feedbacks</Title>
        <List>
          {dailyFeedbacks.map((dailyFeedback) => {
            return (
              <ListItem key={dailyFeedback.id}>
                <Link tag={RemixLink} to={`/daily-feedbacks/${dailyFeedback.id}`}>
                  {dailyFeedback.title}
                </Link>
              </ListItem>
            )
          })}
        </List>
      </Frame>
      <Footer />
    </>
  )
}
