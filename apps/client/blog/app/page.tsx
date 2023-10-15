import { Heading, List, ListItem, Link } from '@okmtyuta/amatelas/server'
import NextLink from 'next/link'

const Page = () => {
  return (
    <>
      <Heading>Daily feedback</Heading>
      <List>
        <ListItem marker="done">
          <Link tag={NextLink} href="/daily-feedback/1">
            14th October 2023
          </Link>
        </ListItem>
        <ListItem marker="done">
          <Link tag={NextLink} href="/daily-feedback/2">
            13th October 2023
          </Link>
        </ListItem>
        <ListItem marker="done">
          <Link tag={NextLink} href="/daily-feedback/3">
            12th October 2023
          </Link>
        </ListItem>
      </List>
    </>
  )
}

export default Page
