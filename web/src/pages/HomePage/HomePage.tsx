import { MetaTags } from '@redwoodjs/web'

import ArticleListCell from 'src/components/ArticleListCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ArticleListCell />
    </>
  )
}

export default HomePage
