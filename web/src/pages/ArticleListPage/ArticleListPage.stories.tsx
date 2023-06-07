import type { ComponentMeta } from '@storybook/react'

import ArticleListPage from './ArticleListPage'

export const generated = () => {
  return <ArticleListPage />
}

export default {
  title: 'Pages/ArticleListPage',
  component: ArticleListPage,
} as ComponentMeta<typeof ArticleListPage>
