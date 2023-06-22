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
      createdAt
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
  return (
    <>
      <MetaTags
        title={article.title}
        description={article.body}
        author={article.user.name}
        locale={'ko'}
        // ogContentUrl={article.imgPath}
        // ogWidth={'1200'}
        // ogHeight={'900'}
      />
      <Article article={article} />
    </>
  )
}
