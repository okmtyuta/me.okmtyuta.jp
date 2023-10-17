import { Markdown } from '@okmtyuta/amatelas-markdown'
import { Title } from '@okmtyuta/amatelas/server'
import { DailyFeedback, PrismaClient } from '@okmtyuta/me.okmtyuta.jp.prisma'

type Params = {
  id: string
}
type PageProps = {
  params: Params
}

const fetchDailyFeedback = async (params: Params) => {
  const prisma = await new PrismaClient()
  const dailyFeedback = await prisma.dailyFeedback.findUnique({
    where: {
      id: Number(params.id)
    }
  })
  await prisma.$disconnect()

  return dailyFeedback
}
export const dynamic = 'force-dynamic'

const Page = async (props: PageProps) => {
  const dailyFeedback = await fetchDailyFeedback(props.params)

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
