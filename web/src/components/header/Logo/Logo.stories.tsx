import type { ComponentMeta } from '@storybook/react'
import { ColorSchemeWrapper } from 'config/storybook.preview'

import Logo, { LogoContainer, LogoProps } from './Logo'

export const Generated = (args: LogoProps) => {
  return (
    <ColorSchemeWrapper>
      <Logo {...args} />
    </ColorSchemeWrapper>
  )
}

export const GeneratedDark = (args: LogoProps) => {
  return (
    <ColorSchemeWrapper initialScheme="dark">
      <Logo {...args} />
    </ColorSchemeWrapper>
  )
}

export const Wrapped = (args: LogoProps) => {
  return (
    <ColorSchemeWrapper>
      <LogoContainer>
        <Logo {...args} />
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

export const WrappedDark = (args: LogoProps) => {
  return (
    <ColorSchemeWrapper initialScheme="dark">
      <LogoContainer>
        <Logo {...args} />
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
