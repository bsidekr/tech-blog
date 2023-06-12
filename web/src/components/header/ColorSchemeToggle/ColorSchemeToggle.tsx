import { Switch, useMantineColorScheme } from '@mantine/core'

import { SunIcon, MoonIcon } from './ColorSchemeToggle.utils'

const ActionToggle = () => {
  const { toggleColorScheme } = useMantineColorScheme()

  return (
    <button
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => toggleColorScheme()}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  )
}

export const SwitchToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Switch
      checked={colorScheme === 'dark'}
      onChange={() => toggleColorScheme()}
      size="lg"
      onLabel={<SunIcon className="h-4 w-4 fill-white stroke-white stroke-2" />}
      offLabel={
        <MoonIcon className="h-4 w-4 fill-gray-500 stroke-gray-500 stroke-2" />
      }
    />
  )
}

export default ActionToggle
