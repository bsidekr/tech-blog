// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MobileNavigation> = (args) => {
//   return <MobileNavigation {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import MobileNavigation from './MobileNavigation'

export const generated = () => {
  return <MobileNavigation />
}

export default {
  title: 'Components/MobileNavigation',
  component: MobileNavigation,
} as ComponentMeta<typeof MobileNavigation>
