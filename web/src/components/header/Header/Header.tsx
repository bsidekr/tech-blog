import { Container } from '@mantine/core'

import { routes, useMatch } from '@redwoodjs/router'

import ActionToggle from '../ColorSchemeToggle/ColorSchemeToggle'
import Logo, { LogoContainer } from '../Logo/Logo'
import DesktopNavigation from '../navigation/DesktopNavigation/DesktopNavigation'
import MobileNavigation from '../navigation/MobileNavigation/MobileNavigation'

const Header = () => {
  const isHomePage = useMatch(routes.home()).match

  return (
    <header
      className="pointer-events-none relative z-50 flex flex-col"
      style={{
        height: 'var(--header-height)',
        marginBottom: 'var(--header-mb)',
      }}
    >
      {isHomePage && (
        <>
          <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]" />
          <Container className="top-0 order-last -mb-3 pt-3">
            <div className="w-full">
              <div className="relative">
                <LogoContainer
                  className="absolute left-0 top-3 origin-left transition-opacity"
                  style={{
                    opacity: 'var(--avatar-border-opacity, 0)',
                    transform: 'var(--avatar-border-transform)',
                  }}
                />
                <Logo
                  large
                  className="block h-16 w-16 origin-left"
                  style={{ transform: 'var(--avatar-image-transform)' }}
                />
              </div>
            </div>
          </Container>
        </>
      )}
      <div
        className="top-0 z-10 h-16 pt-6"
        // style={{ position: 'var(--header-position)' }}
      >
        <Container
          className="top-[var(--header-top,theme(spacing.6))] w-full"
          // style={{ position: 'var(--header-inner-position)' }}
        >
          <div className="relative flex gap-4">
            <div className="flex flex-1">
              {!isHomePage && (
                <LogoContainer>
                  <Logo />
                </LogoContainer>
              )}
            </div>
            <div className="flex flex-1 justify-end pt-2 md:justify-center">
              <div>
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
            </div>
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto">
                <ActionToggle />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header
