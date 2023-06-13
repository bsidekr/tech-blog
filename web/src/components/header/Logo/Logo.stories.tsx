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

export const GeneratedDark = () => {
  return (
    <ColorSchemeWrapper initialScheme="dark">
      <Logo />
    </ColorSchemeWrapper>
  )
}

export const Wrapped = () => {
  return (
    <ColorSchemeWrapper>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </ColorSchemeWrapper>
  )
}
Wrapped.parameters = {
  docs: {
    storyDescription:
      'LogoContainer wrapped: circular border, blur, opacity added',
  },
}

export const WrappedDark = () => {
  return (
    <ColorSchemeWrapper initialScheme="dark">
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </ColorSchemeWrapper>
  )
}

export default {
  title: 'Components/header/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Displays circular svg logo',
  },
} as ComponentMeta<typeof Logo>
