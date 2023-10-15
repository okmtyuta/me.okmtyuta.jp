import { formatDate } from '@/date/format'
import { dailyFeedbacks, tasks } from '@/db/blog/data'
import { Markdown } from '@okmtyuta/amatelas-markdown'
import { Heading, List, ListItem, Title } from '@okmtyuta/amatelas/server'

type Params = {
  id: string
}
type PageProps = {
  params: Params
}

export const generateStaticParams = async (): Promise<Params[]> => {
  return dailyFeedbacks.map((dailyFeedback) => {
    return {
      id: dailyFeedback.id
    }
  })
}
export const dynamicParams = false

const Page = (props: PageProps) => {
  const dailyFeedback = dailyFeedbacks.find((dailyFeedback) => dailyFeedback.id === props.params.id)

  if (!dailyFeedback) {
    return <div>404</div>
  }

  return (
    <>
      <Title posted={formatDate(dailyFeedback.posted)}>{dailyFeedback.title}</Title>
      <Heading as="h2">今日やったこと</Heading>
      <List>
        {dailyFeedback.done.map((taskId) => {
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

      <Heading as="h2">明日やること</Heading>
      <List>
        {dailyFeedback.todo.map((taskId) => {
          const task = tasks.find((task) => task.id === taskId)
          if (!task) {
            return
          }
          return <ListItem key={task.id}>{task.body}</ListItem>
        })}
      </List>

      <Heading as="h2">今日学んだこと</Heading>
      <Markdown>{dailyFeedback.retrospective}</Markdown>
    </>
  )
}

export default Page
