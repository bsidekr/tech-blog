import { ChevronDownIcon } from '@heroicons/react/solid'
import { Menu } from '@mantine/core'

import { Link, routes } from '@redwoodjs/router'

const MobileNavigation = (props) => {
  return (
    <Menu {...props}>
      <Menu.Target>
        <button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
          Menu
          <ChevronDownIcon className="ml-3 h-auto w-4 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Navigation</Menu.Label>
        <Link to={routes.home()}>
          <Menu.Item>Home</Menu.Item>
        </Link>
        <Link to={routes.about()}>
          <Menu.Item>About</Menu.Item>
        </Link>
        <Link to={routes.articles()}>
          <Menu.Item>Article</Menu.Item>
        </Link>
        <Link to={routes.contact()}>
          <Menu.Item>Contact</Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  )
}

export default MobileNavigation
