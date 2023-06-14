import { clsx } from '@mantine/core'
import type { FindArticleListQuery } from 'types/graphql'

import CommentForm from 'src/components/CommentForm'
import CommentsCell from 'src/components/CommentsCell'
import { intlDateTimeFormat } from 'src/lib/formatters'

interface Props {
  article: FindArticleListQuery['articles'][0]
}

const Article = ({ article }: Props) => {
  return (
    <article>
      <header className="flex flex-col">
        <h1 className="mt-6">{article.title}</h1>
        <time
          dateTime={article.createdAt}
          className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          <span className="ml-3">{intlDateTimeFormat(article.createdAt)}</span>
        </time>
      </header>
      <Prose className="mt-8">{article.body}</Prose>
      <div className="mt-12">
        <CommentForm postId={article.id} />
        <div className="mt-12">
          <CommentsCell postId={article.id} />
        </div>
      </div>
    </article>
  )
}

const Prose = ({ children, className }) => {
  return (
    <div
      className={clsx(className, 'prose dark:prose-invert')}
      dangerouslySetInnerHTML={{ __html: children }}
    ></div>
  )
}
export default Article
