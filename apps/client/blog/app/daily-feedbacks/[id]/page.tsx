import { Markdown } from '@okmtyuta/amatelas-markdown'
import { Title } from '@okmtyuta/amatelas/server'
import { PrismaClient } from '@okmtyuta/me.okmtyuta.jp.prisma'

type Params = {
  id: string
}
type PageProps = {
  params: Params
}

export const generateStaticParams = async (): Promise<Params[]> => {
  const prisma = await new PrismaClient()

  const dailyFeedbacks = await prisma.dailyFeedback.findMany()
  await prisma.$disconnect()
  return dailyFeedbacks.map((dailyFeedback) => {
    return {
      id: dailyFeedback.id.toString()
    }
  })
}
export const dynamicParams = false

const fetchDailyFeedback = async (id: number) => {
  const prisma = await new PrismaClient()
  const dailyFeedback = await prisma.dailyFeedback.findUnique({
    where: {
      id: id
    }
  })
  await prisma.$disconnect()

  return dailyFeedback
}

const Page = async (props: PageProps) => {
  const dailyFeedback = await fetchDailyFeedback(Number(props.params.id))

  if (!dailyFeedback) {
    return <div>404</div>
  }

  return (
    <>
      <Title>{dailyFeedback.title}</Title>
      <Markdown>{dailyFeedback.retrospective}</Markdown>
    </>
  )
}

export default Page
