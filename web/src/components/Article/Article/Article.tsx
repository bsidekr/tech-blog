import type { FindArticleListQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import CommentForm from 'src/components/CommentForm'
import CommentsCell from 'src/components/CommentsCell'

interface Props {
  article: FindArticleListQuery['articles'][0]
}

const Article = ({ article }: Props) => {
  return (
    <article>
      <header>
        <h2 className="text-xl font-semibold text-purple-700">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
          <span className="ml-2 font-normal text-gray-400">
            by {article.user.name}
          </span>
        </h2>
      </header>
      <div className="mt-2 font-light text-gray-900">{article.body}</div>
      <div className="mt-12">
        <CommentForm postId={article.id} />
        <div className="mt-12">
          <CommentsCell postId={article.id} />
        </div>
      </div>
    </article>
  )
}

export default Article