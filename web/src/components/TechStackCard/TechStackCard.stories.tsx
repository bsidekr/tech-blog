import type { ComponentMeta } from '@storybook/react'

import { techStacks } from 'src/pages/TechPage/techStack.values'

import TechStackCard from './TechStackCard'

export const generated = (args) => {
  return <TechStackCard {...args} />
}
generated.args = techStacks[0]

export default {
  title: 'Components/TechStackCard',
  component: TechStackCard,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof TechStackCard>
