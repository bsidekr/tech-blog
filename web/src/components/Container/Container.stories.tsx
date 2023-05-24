// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Container> = (args) => {
//   return <Container {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Container from './Container'

export const container = () => {
  return (
    <Container>
      <div className="bg-slate-200 py-20"></div>
    </Container>
  )
}

export const outerAndInner = () => {
  return (
    <Container.Outer>
      <div className="bg-slate-200 py-20">
        <Container.Inner>
          <div className="bg-slate-400 py-20"></div>
        </Container.Inner>
      </div>
    </Container.Outer>
  )
}

export default {
  title: 'Components/Container',
  component: Container,
} as ComponentMeta<typeof Container>
