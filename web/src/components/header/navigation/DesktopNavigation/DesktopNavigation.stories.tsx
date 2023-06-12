import type { ComponentMeta } from '@storybook/react'

import DesktopNavigation from './DesktopNavigation'

export const generated = () => {
  return <DesktopNavigation />
}

export default {
  title: 'Components/header/DesktopNavigation',
  component: DesktopNavigation,
} as ComponentMeta<typeof DesktopNavigation>
