import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { ColorSchemeWrapper } from 'config/storybook.preview'

import BlogLayout from './BlogLayout'

export const generated: ComponentStory<typeof BlogLayout> = (args) => {
  return (
    <ColorSchemeWrapper>
      <BlogLayout {...args} />
    </ColorSchemeWrapper>
  )
}

export const mobile: ComponentStory<typeof BlogLayout> = (args) => {
  return (
    <ColorSchemeWrapper>
      <BlogLayout {...args} />
    </ColorSchemeWrapper>
  )
}
mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}

export default {
  title: 'Layouts/BlogLayout',
  component: BlogLayout,
} as ComponentMeta<typeof BlogLayout>
