import type { MetaFunction } from '@remix-run/node'

import { Footer, Header } from '@okmtyuta/me.okmtyuta.jp.ui'
import { Frame } from '@okmtyuta/amatelas/server'

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
        広い意味で数理科学と情報科学を勉強しています。とくに数理物理学（量子力学），確率統計学，代数学，プログラミング言語，機械学習，暗号理論に興味があります。いずれの分野についてもその理論構造に強い関心があります。また，UI/UXデザインやグラフィックデザイン，3Dモデリングにも興味があります。TOEFL96点取得。
        I am majored in mathematical sciences and information technologies in a broad sense. I am particularly
        interested in quantum mechanics, probability and statistics, algebra, programming languages, machine learning,
        andcryptology. For each areas, I am strongly interested in their theoretical structure. I have scored 96 in
        TOEFL Test.
      </Frame>
      <Footer />
    </>
  )
}
