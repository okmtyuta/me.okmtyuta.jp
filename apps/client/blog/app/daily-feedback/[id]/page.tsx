import { articles, findArticleById, findTaskById } from '@/db/blog/data'
import { Heading, List, ListItem, Paragraph, Title } from '@okmtyuta/amatelas/server'

type Params = {
  id: string
}
type PageProps = {
  params: Params
}

export const generateStaticParams = async (): Promise<Params[]> => {
  return articles.map((article) => {
    return {
      id: article.id
    }
  })
}
export const dynamicParams = false
const formatDate = (date: Date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  return `${date.getDate()}th ${months[date.getMonth()]} ${date.getFullYear()}`
}

const Page = (props: PageProps) => {
  const article = findArticleById(props.params.id)

  if (!article) {
    return <div>404</div>
  }

  return (
    <>
      <Title posted={formatDate(article.posted)}>{article.title}</Title>
      <Heading as="h2">今日やったこと</Heading>
      <List>
        {article.done.map((taskId) => {
          const task = findTaskById(taskId)
          if (!task) {
            return
          }
          const marker = task.status === 'done' ? 'done' : 'dangerous'
          return (
            <ListItem marker={marker} key={task.id}>
              {task.body}
            </ListItem>
          )
        })}
      </List>

      <Heading as="h2">明日やること</Heading>
      <List>
        {article.todo.map((taskId) => {
          const task = findTaskById(taskId)
          if (!task) {
            return
          }
          return <ListItem key={task.id}>{task.body}</ListItem>
        })}
      </List>

      <Heading as="h2">今日学んだこと</Heading>
      <Paragraph>{article.retrospective}</Paragraph>
    </>
  )
}

export default Page
