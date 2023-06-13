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
      <div className="dark:bg-zinc-900">
        <Footer />
      </div>
    </ColorSchemeWrapper>
  )
}

export const mobile = () => {
  return (
    <ColorSchemeWrapper>
      <Footer />
    </ColorSchemeWrapper>
  )
}
mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>
