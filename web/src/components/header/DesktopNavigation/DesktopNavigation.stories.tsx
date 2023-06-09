// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DesktopNavigation> = (args) => {
//   return <DesktopNavigation {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DesktopNavigation from './DesktopNavigation'

export const generated = () => {
  return <DesktopNavigation />
}

export default {
  title: 'Components/DesktopNavigation',
  component: DesktopNavigation,
} as ComponentMeta<typeof DesktopNavigation>
