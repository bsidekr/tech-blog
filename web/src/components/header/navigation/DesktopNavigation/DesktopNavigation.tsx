import { clsx } from '@mantine/core'

import { Link, routes, useMatch } from '@redwoodjs/router'

import navigation from '../navigation.utils'

const NavItem = ({ href, children }) => {
  const isActive = useMatch(href).match

  return (
    <li>
      <Link
        to={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? '!text-purple-400 dark:text-purple-200'
            : 'hover:text-purple-400 dark:hover:text-purple-200'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-purple-400/0 via-purple-400/80 to-purple-400/0 dark:from-purple-200/0 dark:via-purple-200/40 dark:to-purple-200/0" />
        )}
      </Link>
    </li>
  )
}

const DesktopNavigation = (props) => {
  const items = navigation.map((item) => (
    <NavItem href={routes[item.name]()} key={item.name}>
      {item.label}
    </NavItem>
  ))

  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {items}
      </ul>
    </nav>
  )
}

export default DesktopNavigation
