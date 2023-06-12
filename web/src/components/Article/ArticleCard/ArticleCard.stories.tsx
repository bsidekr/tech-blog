import type { ComponentMeta } from '@storybook/react'

import ArticleCard from './ArticleCard'
import { standard } from './ArticleCard.mock'

const article = standard().article
const Template = (args) => <ArticleCard article={args.article} />

export const Default = Template.bind({})
Default.args = {
  article,
}

export const SmallSize = Template.bind({})
SmallSize.args = {
  article,
}
SmallSize.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}

export default {
  title: 'Components/ArticleCard',
  component: ArticleCard,
} as ComponentMeta<typeof ArticleCard>
