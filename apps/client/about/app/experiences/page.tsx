import { Heading, Paragraph, Typography, List, ListItem } from '@okmtyuta/amatelas/server'

const Page = () => {
  return (
    <>
      <Heading>できること</Heading>

      <Paragraph>
        <Typography fontWeight='bold'>HTML/CSSによる静的なページの制作ができます。</Typography>
        このWebページレベルの静的ページの実装はもちろんできますし，もう少しアニメーションのあるページやアクセシビリティを考慮したページの作成もできます。
      </Paragraph>
      <Paragraph>
        <Typography fontWeight='bold'>Reactなどを用いたインタラクティブなWebページの制作ができます。</Typography>
        ReactおよびNextは日頃から使っています。Reactを用いたUIライブラリの制作なども行なっています。VueおよびAngularも少し使ったことがあります。
      </Paragraph>
      <Paragraph>
        <Typography fontWeight='bold'>TypeScript/Python/Ruby/Goを用いたWebのバックエンド実装ができます。</Typography>
        特に，NestJS，Django，Ruby on Railsなどのフレームワークを利用したことがあります。これらを用いたWeb APIの開発経験があります。
      </Paragraph>
      <Paragraph>
        <Typography fontWeight='bold'>Webアプリに関連したLinuxサーバーの構築ができます。</Typography>
        Linuxサーバーを構築して，その上でWebサービスを配信した経験があります。
      </Paragraph>

      <Heading>できないこと</Heading>

      <Paragraph>
        <Typography fontWeight='bold'>AWS等のWebインフラにはまだ詳しくありません。</Typography>
        クラウドサービスはあまり利用したことがありません。EC2などのサーバーサービスは利用したことがありますが，それ以上のことはしたことがありません。勉強中です。
      </Paragraph>
      <Paragraph>
        <Typography fontWeight='bold'>セキュリティ周りにはまだ詳しくありません。</Typography>
        セキュリティを強く意識したサービス開発の経験がありません。認証認可には一定関心がありますが，深くは知りません。勉強中です。
      </Paragraph>
      <Paragraph>
        <Typography fontWeight='bold'>ソフトウェアの低レイヤー部分にはまだ詳しくありません。</Typography>
        オペレーションシステムや通信技術はあまり詳しくありません。一方で，これらの分野には強く関心があるので勉強中です。
      </Paragraph>
      <Paragraph>
        <Typography fontWeight='bold'>ハードウェアにはまだ詳しくありません。</Typography>
        コンピュータ自体は好きですが，ハードウェアを専門的に勉強したことはありません。これから勉強していきます。
      </Paragraph>
      <Paragraph>
        <Typography fontWeight='bold'>他にもいろいろ詳しくないです。</Typography>
        コンピュータおよび数理科学に関連したことは何にでも興味がありますが，これ以上に何に詳しくないか言えないほどいろいろなものに詳しくないです。勉強中です。
      </Paragraph>
    </>
  )
}
export default Page
