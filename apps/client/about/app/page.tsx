import { Heading, Paragraph, Typography, List, ListItem } from '@okmtyuta/amatelas/server'

const Page = () => {
  return (
    <>
      <Heading>Overview</Heading>

      <Paragraph>
        広い意味で数理科学と情報科学を勉強しています。とくに
        <Typography color="danger" fontWeight="bold">
          数理物理学（量子力学）
        </Typography>
        ，
        <Typography color="danger" fontWeight="bold">
          確率統計学
        </Typography>
        ，
        <Typography color="danger" fontWeight="bold">
          代数学
        </Typography>
        ，
        <Typography color="danger" fontWeight="bold">
          プログラミング言語
        </Typography>
        ，
        <Typography color="danger" fontWeight="bold">
          機械学習
        </Typography>
        ，
        <Typography color="danger" fontWeight="bold">
          暗号理論
        </Typography>
        に興味があります。いずれの分野についてもその理論構造に強い関心があります。また，UI/UXデザインやグラフィックデザイン，3Dモデリングにも興味があります。TOEFL96点取得。
      </Paragraph>

      <Paragraph>
        I am majored in mathematical sciences and information technologies in a broad sense. I am particularly
        interested in{' '}
        <Typography color="danger" fontWeight="bold">
          quantum mechanics
        </Typography>
        ,{' '}
        <Typography color="danger" fontWeight="bold">
          probability and statistics
        </Typography>
        ,{' '}
        <Typography color="danger" fontWeight="bold">
          algebra
        </Typography>
        ,{' '}
        <Typography color="danger" fontWeight="bold">
          programming languages
        </Typography>
        ,{' '}
        <Typography color="danger" fontWeight="bold">
          machine learning
        </Typography>
        , and {' '}
        <Typography color="danger" fontWeight="bold">
          cryptology
        </Typography>
        . For each areas, I am strongly interested in their theoretical structure. I have scored 96 in TOEFL Test.
      </Paragraph>

      <Heading>Educations</Heading>

      <Paragraph>大学では数理物理学を学習しました。来年からは大学院で深層学習の数理を研究する予定です。</Paragraph>

      <Paragraph>
        I have studied Mathematical Physics in undergraduate school. In graduate school, I am going to study
        mathematical foundation of deep learning.
      </Paragraph>

      <List>
        <ListItem>
          <Typography color="danger" fontWeight="bold">
            Department of Mathematics, Faculty of Science, University of Tokyo
          </Typography>
          : 2020 April - 2024 March, Majored in Mathematical Physics.
        </ListItem>
      </List>

      <Heading>Experiences</Heading>

      <Paragraph>
        学外ではソフトウェアエンジニアとして活動してきました。機械学習やUI/UXデザインの領域でも価値を出していきたいと思っています。
      </Paragraph>

      <Paragraph>
        I have worked as software engineer. From now on, I would like to be active in the areas of not only software,
        but also Machine Learning and UI/UX design.
      </Paragraph>

      <List>
        <ListItem>
          <Typography color="danger" fontWeight="bold">
            Rakuten Group, Inc.
          </Typography>
          : August 2022, Application Engineer, Internship
        </ListItem>
        <ListItem>
          <Typography color="danger" fontWeight="bold">
            Net Protections, Inc.
          </Typography>
          : October 2022 - April 2023, Application Engineer, Internship
        </ListItem>
        <ListItem>
          <Typography color="danger" fontWeight="bold">
            PKSHA Technology, Inc.
          </Typography>
          : March 2023 - April 2023, Software Engineer, Internship
        </ListItem>
        <ListItem>
          <Typography color="danger" fontWeight="bold">
            PKSHA Technology, Inc.
          </Typography>
          : October 2023 - Current, Software Engineer, Internship
        </ListItem>
      </List>
    </>
  )
}
export default Page
