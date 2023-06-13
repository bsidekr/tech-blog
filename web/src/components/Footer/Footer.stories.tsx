import type { ComponentMeta } from '@storybook/react'
import { ColorSchemeWrapper } from 'config/storybook.preview'

import Footer from './Footer'

export const generated = () => {
  return (
    <ColorSchemeWrapper>
      <Footer />
    </ColorSchemeWrapper>
  )
}

export const generatedDark = () => {
  return (
    <ColorSchemeWrapper initialScheme="dark">
      <Footer />
    </ColorSchemeWrapper>
  )
}

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>
