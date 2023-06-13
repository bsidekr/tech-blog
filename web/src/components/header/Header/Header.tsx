import { useAuth } from 'src/auth'
import Container from 'src/components/Container'

import { ActionToggle } from '../ColorSchemeToggle/ColorSchemeToggle'
import Logo, { LogoContainer } from '../Logo/Logo'
import DesktopNavigation from '../navigation/DesktopNavigation/DesktopNavigation'
import MobileNavigation from '../navigation/MobileNavigation/MobileNavigation'

const Header = () => {
  const { logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <header className="relative z-50 flex flex-col">
      <div className="top-0 z-10 h-16 pt-6">
        <Container>
          <div className="relative flex gap-4">
            <div className="flex flex-1">
              <LogoContainer>
                <Logo className="px-3 py-2" />
              </LogoContainer>
            </div>
            <div className="flex flex-1 items-center justify-end md:justify-center">
              <div>
                <MobileNavigation className="md:hidden" />
                <DesktopNavigation className="hidden md:block" />
              </div>
            </div>
            <div className="flex justify-end md:flex-1">
              <ActionToggle />
              {isAuthenticated && (
                <div className="absolute flex flex-col items-start gap-2">
                  <button type="button" onClick={logOut}>
                    Logout
                  </button>
                  <div>{currentUser.email}</div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header
