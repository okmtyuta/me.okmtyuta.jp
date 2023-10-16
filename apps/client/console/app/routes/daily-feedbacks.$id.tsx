import { type MetaFunction } from '@remix-run/node'

import { Footer, Header } from '@okmtyuta/me.okmtyuta.jp.ui'
import { Frame, Title, Paragraph, Link } from '@okmtyuta/amatelas/server'

import '@okmtyuta/awesome-css/reset.css'
import '@okmtyuta/amatelas/style.css'
import '@okmtyuta/me.okmtyuta.jp.ui/style.css'

import { PrismaClient } from '@okmtyuta/me.okmtyuta.jp.prisma'
import { Link as RemixLink, useLoaderData } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [{ title: 'okmtyuta console | Daily Feedback Create' }, { name: 'description', content: 'Welcome to Remix!' }]
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
        <Title>{dailyFeedback.title}</Title>
        <Paragraph>{dailyFeedback.retrospective}</Paragraph>
        <Paragraph>
          <Link color="info" to={`/daily-feedbacks/edit/${dailyFeedback.id}`} tag={RemixLink}>
            Edit Feedback
          </Link>
        </Paragraph>
        <Paragraph>
          <Link color="danger" to="" tag={RemixLink}>
            Delete Feedback
          </Link>
        </Paragraph>
      </Frame>
      <Footer />
    </>
  )
}
