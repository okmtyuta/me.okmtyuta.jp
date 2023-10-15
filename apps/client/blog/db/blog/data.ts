type TaskId = string
type TaskStatus = 'done' | 'pending'
type Task = {
  id: TaskId
  body: string
  status: TaskStatus
}
type Article = {
  id: string
  title: string
  posted: Date
  done: TaskId[]
  todo: TaskId[]
  retrospective: string
}

export const tasks: Task[] = [
  {
    id: '1',
    body: '来週の講究の準備をする。',
    status: 'done'
  },
  {
    id: '2',
    body: '内定先のイベントに参加する。',
    status: 'done'
  },
  {
    id: '3',
    body: 'プールに行く',
    status: 'pending'
  },
]

export const articles: Article[] = [
  {
    id: '1',
    title: 'Daily Feedback',
    posted: new Date('2023-10-13'),
    done: ['1', "3"],
    todo: ['2'],
    retrospective: '特になし'
  },
  {
    id: '2',
    title: 'Daily Feedback',
    posted: new Date('2023-10-14'),
    done: [],
    todo: [],
    retrospective: '特になし'
  },
  {
    id: '3',
    title: 'Daily Feedback',
    posted: new Date('2023-10-15'),
    done: [],
    todo: [],
    retrospective: '特になし'
  }
]

export const findArticleById = (id: string) => {
  const article = articles.find((article) => {
    return article.id === id
  })

  return article
}
export const findTaskById = (id: string) => {
  const task = tasks.find((task) => {
    return task.id === id
  })

  return task
}
