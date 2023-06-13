// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PostEditor> = (args) => {
//   return <PostEditor {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PostEditor from './PostEditor'

export const generated = () => {
  return <PostEditor />
}

export default {
  title: 'Components/PostEditor',
  component: PostEditor,
} as ComponentMeta<typeof PostEditor>
