import type { ComponentMeta } from '@storybook/react'
import { ColorSchemeWrapper } from 'config/storybook.preview'

import { ActionToggle, SwitchToggle } from './ColorSchemeToggle'

/**
 * ## All Toggles
 */
export const All = () => {
  return (
    <ColorSchemeWrapper>
      <ActionToggle />
      <div className="h-4" />
      <SwitchToggle />
    </ColorSchemeWrapper>
  )
}

export const LightActionButton = () => {
  return (
    <ColorSchemeWrapper>
      <ActionToggle />
    </ColorSchemeWrapper>
  )
}

export const DarkActionButton = () => {
  return (
    <ColorSchemeWrapper initialScheme="dark">
      <ActionToggle />
    </ColorSchemeWrapper>
  )
}

export const SwitchLight = () => {
  return (
    <ColorSchemeWrapper>
      <SwitchToggle />
    </ColorSchemeWrapper>
  )
}

export const SwitchDark = () => {
  return (
    <ColorSchemeWrapper initialScheme="dark">
      <SwitchToggle />
    </ColorSchemeWrapper>
  )
}

export default {
  title: 'Components/header/ColorSchemeToggle',
  component: All,
  decorators: [
    (Story) => (
      <div className="flex flex-col items-center justify-center gap-2">
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle:
      'UI components for color scheme toggle (ref: https://ui.mantine.dev/category/color-scheme)',
  },
} as ComponentMeta<typeof All>
