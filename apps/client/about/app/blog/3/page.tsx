import { Heading, Paragraph, List, ListItem, Title } from '@okmtyuta/amatelas/server'

const Page = () => {
  return (
    <>
      <Title posted="14th October 2023">Daily Feedback</Title>

      <Heading as="h2">今日やったこと</Heading>
      <List>
        <ListItem marker="done">プールに泳ぎに行った</ListItem>
      </List>

      <Heading as="h2">明日やること</Heading>
      <List>
        <ListItem>来週の講究の準備をする</ListItem>
      </List>

      <Heading as="h2">感想</Heading>
      <Paragraph>初めて御殿下記念館のプールに行ったが，空いていてとても泳ぎやすかった。これから通おう。</Paragraph>
    </>
  )
}
export default Page
