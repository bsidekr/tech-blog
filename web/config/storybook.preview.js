import * as React from 'react'

import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import * as theme from 'config/mantine.config'

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#333333',
      },
      {
        name: 'campaign dark',
        value: '#03050E',
      },
    ],
  },
}

/** @type { import("@storybook/csf").GlobalTypes } */
export const globalTypes = {}
/**
 * An example, no-op storybook decorator. Use a function like this to create decorators.
 * @param { import("@storybook/addons").StoryFn} StoryFn
 * @param { import("@storybook/addons").StoryContext} context
 * @returns StoryFn, unmodified.
 */
const _exampleDecorator = (StoryFn, _context) => {
  return <StoryFn />
}
const useWithMantine = (StoryFn) => {
  return (
    <MantineProvider theme={theme}>
      <StoryFn />
    </MantineProvider>
  )
}

export const decorators = [useWithMantine]

export const ColorSchemeWrapper = ({ children, initialScheme = 'light' }) => {
  const [colorScheme, setColorScheme] = React.useState(initialScheme)
  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ ...theme, colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <main className={colorScheme}>{children}</main>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
