import type { ComponentMeta } from '@storybook/react'

import TechPage from './TechPage'

export const generated = () => {
  return <TechPage />
}

export default {
  title: 'Pages/TechPage',
  component: TechPage,
} as ComponentMeta<typeof TechPage>
