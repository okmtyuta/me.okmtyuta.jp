import { redirect, type ActionFunction, type MetaFunction } from '@remix-run/node'

import { Footer, Header } from '@okmtyuta/me.okmtyuta.jp.ui'
import { Frame, TextArea, Button } from '@okmtyuta/amatelas/server'

import '@okmtyuta/awesome-css/reset.css'
import '@okmtyuta/amatelas/style.css'
import '@okmtyuta/me.okmtyuta.jp.ui/style.css'

import { PrismaClient } from '@prisma/client'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const prisma = new PrismaClient()
  const fs = body.get('summary')
  const fb = body.get('body')
  if (typeof fb === 'string' && typeof fs === 'string') {
    const cfb = await prisma.feedback.create({
      data: {
        body: fb,
        summary: fs
      }
    })
    console.log(cfb)
  }
  prisma.$disconnect()
  return redirect('/')
}

export default function Index() {
  return (
    <>
      <Header label="okmtyuta console" />
      <Frame>
        {/* <Title>Create New Feedback</Title> */}

        <form method="post">
          <TextArea placeholder="サマリー" name="summary" variant="standard" />

          <TextArea placeholder="感想" name="body" variant="standard" />

          <Button type="submit">SUBMIT</Button>
        </form>
      </Frame>
      <Footer />
    </>
  )
}
