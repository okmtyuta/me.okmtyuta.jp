import { formatDate } from '@/date/format'
import { dailyFeedbacks, tasks, weeklyFeedbacks } from '@/db/blog/data'
import { Heading, Link, List, ListItem, Title } from '@okmtyuta/amatelas/server'
import { Markdown } from '@okmtyuta/amatelas-markdown'
import NextLink from 'next/link'

type Params = {
  id: string
}
type PageProps = {
  params: Params
}

export const generateStaticParams = async (): Promise<Params[]> => {
  return weeklyFeedbacks.map((weeklyFeedback) => {
    return {
      id: weeklyFeedback.id
    }
  })
}
export const dynamicParams = false

const Page = (props: PageProps) => {
  const weeklyFeedback = weeklyFeedbacks.find((weeklyFeedback) => weeklyFeedback.id === props.params.id)

  if (!weeklyFeedback) {
    return <div>404</div>
  }

  return (
    <>
      <Title posted={formatDate(weeklyFeedback.posted)}>{weeklyFeedback.title}</Title>

      <Heading as="h2">Daily Feedbacks</Heading>
      <List>
        {weeklyFeedback.dailyFeedbacks.map((dailyFeedbackId) => {
          const dailyFeedback = dailyFeedbacks.find((dailyFeedback) => dailyFeedback.id === dailyFeedbackId)
          if (!dailyFeedback) {
            return
          }
          return (
            <ListItem key={dailyFeedback.id}>
              <Link href={`/daily-feedback/${dailyFeedback.id}`} prefetch={false} tag={NextLink}>
                {dailyFeedback.title}
              </Link>
            </ListItem>
          )
        })}
      </List>

      <Heading as="h2">今週やったこと</Heading>
      <List>
        {weeklyFeedback.done.map((taskId) => {
          const task = tasks.find((task) => task.id === taskId)
          if (!task) {
            return
          }
          return (
            <ListItem marker="done" key={task.id}>
              {task.body}
            </ListItem>
          )
        })}
      </List>

      <Heading as="h2">来週やること</Heading>
      <List>
        {weeklyFeedback.todo.map((taskId) => {
          const task = tasks.find((task) => task.id === taskId)
          if (!task) {
            return
          }
          return <ListItem key={task.id}>{task.body}</ListItem>
        })}
      </List>

      <Heading as="h2">今週学んだこと</Heading>
      <Markdown>{weeklyFeedback.retrospective}</Markdown>
    </>
  )
}

export default Page
