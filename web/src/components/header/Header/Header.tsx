import { useAuth } from 'src/auth'
import Container from 'src/components/Container'

import {
  ActionToggle,
  SwitchToggle,
} from '../ColorSchemeToggle/ColorSchemeToggle'
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
            <div className="flex items-center justify-end md:flex-1 md:justify-center">
              <MobileNavigation className="md:hidden" />
              <DesktopNavigation className="hidden md:block" />
            </div>
            <div className="flex justify-end md:flex-1">
              <ActionToggle className="md:hidden" />
              <SwitchToggle className="hidden md:block" />
              {isAuthenticated && (
                <div className="absolute top-16 flex flex-col items-end gap-2">
                  <button
                    type="button"
                    onClick={logOut}
                    className="bg-white p-2 shadow hover:bg-gray-100"
                  >
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
