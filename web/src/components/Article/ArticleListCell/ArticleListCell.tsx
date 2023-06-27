import { Skeleton } from '@mantine/core'
import type {
  FindArticleListQuery,
  FindArticleListQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ArticleCard from 'src/components/Article/ArticleCard/ArticleCard'
import { cacheFirst } from 'src/graphql/cache'

export const beforeQuery = (props) => {
  return { variables: props, ...cacheFirst }
}

export const QUERY = gql`
  query FindArticleListQuery {
    articles: posts {
      id
      title
      summary
      createdAt
      user {
        name
      }
    }
  }
`

export const Loading = () => (
  <div className="flex max-w-3xl flex-col space-y-16">
    {[...Array(7)].map((x, i) => (
      <div className="md:grid md:grid-cols-4 md:items-start" key={i}>
        <div className="hidden px-4 md:block">
          <Skeleton height={8} radius="xl" />
        </div>
        <div className="md:col-span-3">
          <Skeleton height={16} radius="xl" />
          <Skeleton height={8} mt={12} radius="xl" />
          <Skeleton height={8} mt={6} radius="xl" />
          <Skeleton height={8} mt={6} radius="xl" />
        </div>
      </div>
    ))}
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindArticleListQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  articles,
}: CellSuccessProps<FindArticleListQuery, FindArticleListQueryVariables>) => {
  return (
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="flex max-w-3xl flex-col space-y-16">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
