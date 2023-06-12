import { FindArticleListQuery } from 'types/graphql'

import { routes } from '@redwoodjs/router'

import { intlDateTimeFormat } from 'src/lib/formatters'

import Card from '../Card'

interface Props {
  article: FindArticleListQuery['articles'][0]
}

const ArticleCard = ({ article }: Props) => {
  const formattedDateTime = intlDateTimeFormat(article.createdAt)
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={routes.article({ id: article.id })}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.createdAt}
          className="md:hidden"
          decorate
        >
          {formattedDateTime}
        </Card.Eyebrow>
        <Card.Description>{article.body}</Card.Description>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.createdAt}
        className="mt-1 hidden md:block"
      >
        {formattedDateTime}
      </Card.Eyebrow>
    </article>
  )
}

export default ArticleCard
