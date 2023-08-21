import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  MetaTags,
} from '@redwoodjs/web'

import Article from '../Article/Article'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      summary
      createdAt
      thumbnail
      user {
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindArticleQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  article,
}: CellSuccessProps<FindArticleQuery, FindArticleQueryVariables>) => {
  console.log(article)
  return (
    <>
      <MetaTags
        title={`${article.title} | 비사이드코리아`}
        description={article.summary}
        author={'비사이드코리아'}
        locale={'ko'}
        ogContentUrl={article.thumbnail}
        ogWidth={'1200'}
        ogHeight={'900'}
      />
      <Article article={article} />
    </>
  )
}
