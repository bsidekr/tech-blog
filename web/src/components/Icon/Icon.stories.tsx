import type { ComponentMeta } from '@storybook/react'

import { Icon } from './Icon'

const Template = (args) => <Icon size={args.size} variant={args.variant} />

const defaultArgs = {
  size: 'sm',
  variant: 'simple',
  color: 'purple',
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}

export const SmallSize = Template.bind({})
SmallSize.storyName = 'Size: sm'
SmallSize.args = {
  size: 'sm',
}

export const MediumSize = Template.bind({})
MediumSize.storyName = 'Size: md'
MediumSize.args = {
  size: 'md',
}

export const LargeSize = Template.bind({})
LargeSize.storyName = 'Size: lg'
LargeSize.args = {
  size: 'lg',
}

export const ExtraLargeSize = Template.bind({})
ExtraLargeSize.storyName = 'Size: xl'
ExtraLargeSize.args = {
  size: 'xl',
}

export const SimpleVariant = Template.bind({})
SimpleVariant.storyName = 'Variant: simple'
SimpleVariant.args = {
  variant: 'simple',
}

export const ShadowVariant = Template.bind({})
ShadowVariant.storyName = 'Variant: shadow'
ShadowVariant.args = {
  variant: 'shadow',
}

export const LightVariant = Template.bind({})
LightVariant.storyName = 'Variant: light'
LightVariant.args = {
  variant: 'light',
}

export const SolidVariant = Template.bind({})
SolidVariant.storyName = 'Variant: solid'
SolidVariant.args = {
  variant: 'solid',
}

export const OutlinedVariant = Template.bind({})
OutlinedVariant.storyName = 'Variant: outlined'
OutlinedVariant.args = {
  variant: 'outlined',
}

export default {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
} as ComponentMeta<typeof Icon>
