import { formatDate } from '@/date/format'
import { dailyFeedbacks, weeklyFeedbacks } from '@/db/blog/data'
import { Heading, List, ListItem, Link } from '@okmtyuta/amatelas/server'
import NextLink from 'next/link'

const Page = () => {
  const limitedDailyFeedbacks = dailyFeedbacks.slice(0, 5)
  const limitedWeeklyFeedbacks = weeklyFeedbacks.slice(0, 5)
  return (
    <>
      <Heading>Daily feedback</Heading>
      <List>
        {limitedDailyFeedbacks.map((dailyFeedback) => {
          return (
            <ListItem key={dailyFeedback.id} marker="done">
              <Link tag={NextLink} href={`/daily-feedback/${dailyFeedback.id}`}>
                {dailyFeedback.title}
              </Link>
            </ListItem>
          )
        })}
      </List>

      <Heading>Weekly feedback</Heading>
      <List>
        {limitedWeeklyFeedbacks.map((weeklyFeedback) => {
          return (
            <ListItem key={weeklyFeedback.id} marker="done">
              <Link tag={NextLink} href={`/weekly-feedback/${weeklyFeedback.id}`}>
                {weeklyFeedback.title}
              </Link>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default Page
