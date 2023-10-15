type Task = {
  id: string
  body: string
}
type Article = {
  id: string
  title: string
  posted: Date
  done: Task[]
  todo: Task[]
  learning: string
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Daily Feedback',
    posted: new Date('2023-10-13'),
    done: [
      {
        id: crypto.randomUUID(),
        body: '来週の講究の準備をする。'
      }
    ],
    todo: [
      {
        id: crypto.randomUUID(),
        body: '内定先のイベントに参加する。'
      }
    ],
    learning: '特になし'
  },
  {
    id: '2',
    title: 'Daily Feedback',
    posted: new Date('2023-10-14'),
    done: [],
    todo: [],
    learning: '特になし'
  },
  {
    id: '3',
    title: 'Daily Feedback',
    posted: new Date('2023-10-15'),
    done: [],
    todo: [],
    learning: '特になし'
  }
]

export const findArticleById = (id: string) => {
  const article = articles.find((article) => {
    return article.id === id
  })

  return article
}
