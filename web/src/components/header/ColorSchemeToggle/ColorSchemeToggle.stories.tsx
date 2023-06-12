import type { ComponentMeta } from '@storybook/react'
import { ColorSchemeWrapper } from 'config/storybook.preview'

import ActionToggle, { SwitchToggle } from './ColorSchemeToggle'

export const ActionLight = () => {
  return (
    <ColorSchemeWrapper>
      <ActionToggle />
    </ColorSchemeWrapper>
  )
}

export const ActionDark = () => {
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
  component: ActionToggle,
} as ComponentMeta<typeof ActionToggle>
