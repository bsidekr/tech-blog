import { MetaTags } from '@redwoodjs/web'

import ArticleListCell from 'src/components/Article/ArticleListCell'
import Container from 'src/components/Container/Container'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Container>
        <ArticleListCell />
      </Container>
    </>
  )
}

export default HomePage
