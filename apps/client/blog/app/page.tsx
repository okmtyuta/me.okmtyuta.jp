import { Heading, List, ListItem, Link } from '@okmtyuta/amatelas/server'
import NextLink from 'next/link'

import { PrismaClient } from '@okmtyuta/me.okmtyuta.jp.prisma'

const fetchDailyFeedbacks = async () => {
  const prisma = await new PrismaClient()
  const dailyFeedbacks = await prisma.dailyFeedback.findMany()
  await prisma.$disconnect()

  return dailyFeedbacks
}

const Page = async () => {
  const dailyFeedbacks = await fetchDailyFeedbacks()

  return (
    <>
      <Heading>Daily feedback</Heading>
      <List>
        {dailyFeedbacks.map((dailyFeedback) => {
          return (
            <ListItem key={dailyFeedback.id} marker="done">
              <Link tag={NextLink} href={`/daily-feedbacks/${dailyFeedback.id}`}>
                {dailyFeedback.title}
              </Link>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default Page
