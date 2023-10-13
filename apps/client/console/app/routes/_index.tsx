import type { MetaFunction } from '@remix-run/node'

import { Footer, Header } from '@okmtyuta/me.okmtyuta.jp.ui'
import { Frame, Heading, Link, List, ListItem } from '@okmtyuta/amatelas/server'

import '@okmtyuta/awesome-css/reset.css'
import '@okmtyuta/amatelas/style.css'
import '@okmtyuta/me.okmtyuta.jp.ui/style.css'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return (
    <>
      <Header label="okmtyuta console" />
      <Frame>
        <Heading>Menu</Heading>
        <List>
          <ListItem>
            <Link href="/create">Create New Feedback</Link>
          </ListItem>
        </List>
      </Frame>
      <Footer />
    </>
  )
}
