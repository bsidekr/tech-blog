import type { ComponentMeta, ComponentStory } from '@storybook/react'

import SimpleLayout from './SimpleLayout'

export const generated: ComponentStory<typeof SimpleLayout> = (args) => {
  return <SimpleLayout {...args} />
}

export default {
  title: 'Layouts/SimpleLayout',
  component: SimpleLayout,
  args: {
    title: '소프트웨어, 스타트업에 관한 글을 쓰고 있습니다.',
    intro:
      '프로그래밍, 제품 디자인 등에 대한 우리의 모든 생각을 시간순으로 정리했습니다.',
  },
} as ComponentMeta<typeof SimpleLayout>
