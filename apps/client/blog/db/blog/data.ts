type TaskId = string
type TaskStatus = 'done' | 'pending'
type Task = {
  id: TaskId
  body: string
  status: TaskStatus
}
type DailyFeedbackId = string
type DailyFeedback = {
  id: DailyFeedbackId
  title: string
  posted: Date
  done: TaskId[]
  todo: TaskId[]
  retrospective: string
}
type WeeklyFeedbackId = string
type WeeklyFeedback = {
  id: WeeklyFeedbackId
  title: string
  posted: Date
  done: TaskId[]
  todo: TaskId[]
  dailyFeedbacks: DailyFeedbackId[]
  retrospective: string
}

export const tasks: Task[] = [
  // {
  //   id: '1',
  //   body: '来週の講究の準備をする。',
  //   status: 'done'
  // }
]

export const dailyFeedbacks: DailyFeedback[] = [
  // {
  //   id: '1',
  //   title: '13th October 2023',
  //   posted: new Date('2023-10-13'),
  //   done: [],
  //   todo: [],
  //   retrospective: '特になし'
  // },
]

export const weeklyFeedbacks: WeeklyFeedback[] = [
  // {
  //   id: '1',
  //   title: 'October 1st week',
  //   posted: new Date('2023-10-15'),
  //   done: ['1', '2', '3'],
  //   todo: [],
  //   dailyFeedbacks: ['1', '2', '3'],
  //   retrospective: '特になし'
  // }
]
