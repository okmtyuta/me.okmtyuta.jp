import { ActionFunction, redirect, type MetaFunction } from '@remix-run/node'

import { Footer, Header } from '@okmtyuta/me.okmtyuta.jp.ui'
import { Frame, Title, Paragraph, Link, Modal, Button, Flex } from '@okmtyuta/amatelas/server'
import { Markdown } from '@okmtyuta/amatelas-markdown'

import '@okmtyuta/awesome-css/reset.css'
import '@okmtyuta/amatelas/style.css'
import '@okmtyuta/me.okmtyuta.jp.ui/style.css'

import { PrismaClient } from '@okmtyuta/me.okmtyuta.jp.prisma'
import { Link as RemixLink, useLoaderData } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [{ title: 'okmtyuta console | Daily Feedback Create' }, { name: 'description', content: 'Welcome to Remix!' }]
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

export const loader = async ({ params }: { params: { id: string } }) => {
  const prisma = new PrismaClient()
  const dailyFeedbacks = await prisma.dailyFeedback.findUnique({
    where: {
      id: Number(params.id)
    }
  })
  await prisma.$disconnect()
  return dailyFeedbacks
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
        <Modal open>
          <Flex>
            <div>Are you sure you want to delete it?</div>
            <form method="POST">
              <Flex justify="flex-start" direction="row">
                <Button type="submit" color="danger" variant="filled">
                  DELETE
                </Button>
                <Button color="info" as={RemixLink} to={`/daily-feedbacks/${dailyFeedback.id}`}>
                  DECLINE
                </Button>
              </Flex>
            </form>
          </Flex>
        </Modal>
        <Title>{dailyFeedback.title}</Title>
        <Markdown>{dailyFeedback.retrospective}</Markdown>
        <Paragraph>
          <Link color="info" to={`/daily-feedbacks/edit/${dailyFeedback.id}`} tag={RemixLink}>
            Edit Feedback
          </Link>
        </Paragraph>
        <Paragraph>
          <Link color="danger" to={`/daily-feedbacks/delete/${dailyFeedback.id}`} tag={RemixLink}>
            Delete Feedback
          </Link>
        </Paragraph>
      </Frame>
      <Footer />
    </>
  )
}
