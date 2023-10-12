import { Heading, Paragraph, List, ListItem, Title } from '@okmtyuta/amatelas/server'

const Page = () => {
  return (
    <>
      <Title posted="12th October 2023">Daily Feedback</Title>

      <Heading as="h2">今日やったこと</Heading>
      <List>
        <ListItem>講究でHilbert空間上のFourier級数展開について発表した</ListItem>
        <ListItem>Daily Feedbackのページを実験的に作ってみた</ListItem>
      </List>

      <Heading as="h2">明日やること</Heading>
      <List>
        <ListItem>来週の講究の準備をする</ListItem>
        <ListItem>インターン先のイベントに参加する</ListItem>
      </List>

      <Heading as="h2">感想</Heading>
      <Paragraph>講究で久しぶりに発表した。緊張したけど失敗はしなかった。来週も頑張ろう。</Paragraph>
    </>
  )
}
export default Page
