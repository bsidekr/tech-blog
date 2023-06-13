import type { ComponentMeta } from '@storybook/react'
import { ColorSchemeWrapper } from 'config/storybook.preview'

import Header from './Header'

export const dark = () => {
  return (
    <ColorSchemeWrapper initialScheme="dark">
      <Header />
    </ColorSchemeWrapper>
  )
}

export const light = () => {
  return (
    <ColorSchemeWrapper>
      <Header />
    </ColorSchemeWrapper>
  )
}

export const mobile = () => {
  return (
    <ColorSchemeWrapper>
      <Header />
    </ColorSchemeWrapper>
  )
}
mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}

export default {
  title: 'Components/header/Header',
  component: dark,
  parameters: {
    componentSubtitle: 'Header = Logo + Navigation + Theme Toggle',
  },
} as ComponentMeta<typeof Header>
