import { redirect, type ActionFunction, type MetaFunction, json } from '@remix-run/node'

import { Footer, Header } from '@okmtyuta/me.okmtyuta.jp.ui'
import { Frame, Button, Title, Flex } from '@okmtyuta/amatelas/server'

import '@okmtyuta/awesome-css/reset.css'
import '@okmtyuta/amatelas/style.css'
import '@okmtyuta/me.okmtyuta.jp.ui/style.css'

import { PrismaClient } from '@okmtyuta/me.okmtyuta.jp.prisma'
import { useLoaderData } from '@remix-run/react'

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

export const action: ActionFunction = async ({ params }) => {
  const id = params.id

  if (id) {
    const prisma = await new PrismaClient()
    await prisma.dailyFeedback.delete({
      where: {
        id: Number(id)
      }
    })
    await prisma.$disconnect()
    return redirect('/daily-feedbacks')
  }

  return null
}

export default function Index() {
  const dailyFeedback = useLoaderData<typeof loader>()

  if (!dailyFeedback) {
    return <div>404</div>
  }

  return (
    <>
      <Header label="okmtyuta console" />
      <Frame>
        <Title>Delete {dailyFeedback.title}</Title>
        <form method="post">
          <Flex align="center" as="div">
            <Button width="md" variant="filled" color="danger" type="submit">
              DELETE
            </Button>
          </Flex>
        </form>
      </Frame>
      <Footer />
    </>
  )
}
