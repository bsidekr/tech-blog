import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

interface Props {
  id: number
}

const ArticlePage = ({ id }: Props) => {
  return (
    <>
      <MetaTags
        title="Article"
        description="All of our long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
      />
      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
