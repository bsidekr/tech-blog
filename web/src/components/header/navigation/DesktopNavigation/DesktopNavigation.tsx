import { clsx } from '@mantine/core'

import { Link, routes, useMatch } from '@redwoodjs/router'

const NavItem = ({ href, children }) => {
  const isActive = useMatch(href).match

  return (
    <li>
      <Link
        to={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? '!text-teal-500 dark:text-teal-400'
            : 'hover:text-teal-500 dark:hover:text-teal-400'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  )
}

const DesktopNavigation = (props) => {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href={routes.home()}>Home</NavItem>
        <NavItem href={routes.about()}>About</NavItem>
        <NavItem href={routes.articles()}>Articles</NavItem>
        <NavItem href={routes.contact()}>Contact</NavItem>
      </ul>
    </nav>
  )
}

export default DesktopNavigation
