import type { ComponentMeta } from '@storybook/react'

import DesktopNavigation from './DesktopNavigation'

export const generated = () => {
  return <DesktopNavigation />
}

export default {
  title: 'Components/header/DesktopNavigation',
  component: DesktopNavigation,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof DesktopNavigation>
