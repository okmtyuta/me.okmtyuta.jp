import { redirect, type ActionFunction, type MetaFunction } from '@remix-run/node'

import { Footer, Header } from '@okmtyuta/me.okmtyuta.jp.ui'
import { Frame, Textarea, Button, Title, TextField, Flex } from '@okmtyuta/amatelas/server'

import '@okmtyuta/awesome-css/reset.css'
import '@okmtyuta/amatelas/style.css'
import '@okmtyuta/me.okmtyuta.jp.ui/style.css'

import { PrismaClient } from '@okmtyuta/me.okmtyuta.jp.prisma'

export const meta: MetaFunction = () => {
  return [{ title: 'okmtyuta console | Daily Feedback Create' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const title = body.get('title')
  const retrospective = body.get('retrospective')

  if (typeof title === 'string' && typeof retrospective === 'string') {
    const prisma = await new PrismaClient()
    const dailyFeedback = await prisma.dailyFeedback.create({
      data: {
        title,
        retrospective,
        posted: new Date()
      }
    })
    await prisma.$disconnect()
    return redirect(`/daily-feedbacks/${dailyFeedback.id}`)
  }

  return null
}

export default function Index() {
  return (
    <>
      <Header label="okmtyuta console" />
      <Frame>
        <Title>Create Daily Feedback</Title>

        <form method="post">
          <Flex as="div">
            <TextField validate required name="title" placeholder="タイトル"></TextField>
            <Textarea validate required name="retrospective" placeholder="レトロスペクティブ"></Textarea>
            <Button type="submit">SUBMIT</Button>
          </Flex>
        </form>
      </Frame>
      <Footer />
    </>
  )
}
