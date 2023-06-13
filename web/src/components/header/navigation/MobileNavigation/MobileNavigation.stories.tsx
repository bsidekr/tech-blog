import type { ComponentMeta } from '@storybook/react'

import MobileNavigation from './MobileNavigation'

export const generated = () => {
  return <MobileNavigation />
}

export default {
  title: 'Components/header/MobileNavigation',
  component: MobileNavigation,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MobileNavigation>
