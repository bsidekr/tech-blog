import type { ComponentMeta } from '@storybook/react'

import MobileNavigation from './MobileNavigation'

export const generated = () => {
  return <MobileNavigation />
}

export default {
  title: 'Components/header/MobileNavigation',
  component: MobileNavigation,
} as ComponentMeta<typeof MobileNavigation>
