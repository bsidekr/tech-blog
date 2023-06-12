import type { ComponentMeta } from '@storybook/react'
import { ColorSchemeWrapper } from 'config/storybook.preview'

import Header from './Header'

export const generated = () => {
  return (
    <ColorSchemeWrapper>
      <Header />
    </ColorSchemeWrapper>
  )
}

export default {
  title: 'Components/header/Header',
  component: Header,
} as ComponentMeta<typeof Header>
