import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Menu } from '@mantine/core'

import { Link, routes } from '@redwoodjs/router'

import navigation from '../navigation.utils'

const MobileNavigation = (props) => {
  const items = navigation.map((item) => (
    <Menu.Item
      icon={<item.icon className="h-4 w-4 stroke-2" />}
      key={item.name}
    >
      <Link to={routes[item.name]()}>{item.label}</Link>
    </Menu.Item>
  ))

  return (
    <Menu {...props}>
      <Menu.Target>
        <button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
          메뉴
          <ChevronDownIcon className="ml-3 h-4 w-4 stroke-zinc-500 stroke-2 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>메인</Menu.Label>
        {items}
      </Menu.Dropdown>
    </Menu>
  )
}

export default MobileNavigation
