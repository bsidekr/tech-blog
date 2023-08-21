import { useState } from 'react'

import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import { AuthProvider, useAuth } from './auth'

import './scaffold.css'
import './index.css'

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%AppTitle">
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ colorScheme }}
            withNormalizeCSS
            withGlobalStyles
          >
            <AuthProvider>
              <RedwoodApolloProvider useAuth={useAuth}>
                <Routes />
              </RedwoodApolloProvider>
            </AuthProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default App
