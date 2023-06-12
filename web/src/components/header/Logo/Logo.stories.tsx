import type { ComponentMeta } from '@storybook/react'
import { ColorSchemeWrapper } from 'config/storybook.preview'

import Logo, { LogoContainer } from './Logo'

export const Generated = () => {
  return (
    <ColorSchemeWrapper>
      <Logo />
    </ColorSchemeWrapper>
  )
}

export const WrappedLogo = () => {
  return (
    <ColorSchemeWrapper>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </ColorSchemeWrapper>
  )
}

export default {
  title: 'Components/header/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>
