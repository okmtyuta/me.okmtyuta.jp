import { Heading, Paragraph, List, ListItem, Title } from '@okmtyuta/amatelas/server'

const Page = () => {
  return (
    <>
      <Title posted="13th October 2023">Daily Feedback</Title>

      <Heading as="h2">今日やったこと</Heading>
      <List>
        <ListItem marker="done">来週の講究の準備をした</ListItem>
        <ListItem marker="done">内定先のイベントに参加した</ListItem>
        <ListItem marker="done">プログラミングを少々</ListItem>
      </List>

      <Heading as="h2">明日やること</Heading>
      <List>
        <ListItem>来週の講究の準備をする</ListItem>
        <ListItem>プールに泳ぎに行く</ListItem>
      </List>

      <Heading as="h2">感想</Heading>
      <Paragraph>内定先のイベントに参加した。多くの人が楽しそうに話していて，働くのも悪くないかと思われた。</Paragraph>
      <Paragraph>知らない人と長く話すというのはいまだに苦手なので自身の課題だと思う。</Paragraph>
      <Paragraph>
        講究の準備をしていて，解析力学や統計力学の知識が全くないと思った。この辺も勉強しなければいけない。
      </Paragraph>
    </>
  )
}
export default Page
