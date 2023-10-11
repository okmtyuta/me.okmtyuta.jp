import { Heading, List, ListItem } from '@okmtyuta/amatelas/server'
import Link from 'next/link'

const Page = () => {
  return (
    <>
      <Heading>誰かが言ったポエムたち......</Heading>
      <List>
        <ListItem><Link href="/poets/1">甘美な夢</Link></ListItem>
      </List>
    </>
  )
}
export default Page
