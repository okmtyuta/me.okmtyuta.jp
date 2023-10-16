import { redirect, type ActionFunction, type MetaFunction, json } from '@remix-run/node'

import { Footer, Header } from '@okmtyuta/me.okmtyuta.jp.ui'
import { Frame, Textarea, Button, Title, TextField } from '@okmtyuta/amatelas/server'

import '@okmtyuta/awesome-css/reset.css'
import '@okmtyuta/amatelas/style.css'
import '@okmtyuta/me.okmtyuta.jp.ui/style.css'

import { PrismaClient } from '@prisma/client'
import {  useLoaderData } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [{ title: 'okmtyuta console | Daily Feedback Create' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export const loader = async ({ params }: { params: { id: string } }) => {
  const prisma = new PrismaClient()
  const dailyFeedback = await prisma.dailyFeedback.findUnique({
    where: {
      id: Number(params.id)
    }
  })
  await prisma.$disconnect()

  return json({
    title: dailyFeedback?.title,
    id: dailyFeedback?.id.toString(),
    posted: dailyFeedback?.posted.toDateString(),
    retrospective: dailyFeedback?.retrospective
  })
}

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const id = body.get('id')
  const title = body.get('title')
  const retrospective = body.get('retrospective')

  if (typeof title === 'string' && typeof retrospective === 'string' && typeof id === 'string') {
    const prisma = await new PrismaClient()
    const dailyFeedback = await prisma.dailyFeedback.update({
      where: {
        id: Number(id)
      },
      data: {
        title,
        retrospective,
        posted: new Date()
      }
    })
    await prisma.$disconnect()
    return redirect(`/daily-feedbacks/${dailyFeedback.id}`)
  }

  return 'null'
}

export default function Index() {
  const dailyFeedback = useLoaderData<typeof loader>()

  if (!dailyFeedback) {
    return <div>404</div>
  }

  console.log(dailyFeedback)
  return (
    <>
      <Header label="okmtyuta console" />
      <Frame>
        <Title>Edit {dailyFeedback.title}</Title>
        <form method="post">
          <TextField readOnly name="id" value={dailyFeedback.id} />
          <TextField validate required name="title" placeholder="タイトル" defaultValue={dailyFeedback.title} />
          <Textarea
            validate
            required
            name="retrospective"
            placeholder="レトロスペクティブ"
            defaultValue={dailyFeedback.retrospective}
          />
          <Button type="submit">SUBMIT</Button>
        </form>
      </Frame>
      <Footer />
    </>
  )
}
