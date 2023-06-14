import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import type { ComponentMeta } from '@storybook/react'

import SocialLinks, { SocialLink } from './SocialLinks'
import { socialLinks } from './SocialLinks.utils'

export const socialLinksList = () => {
  return <SocialLinks />
}

export const Generated = (args) => {
  return <SocialLink {...args} />
}
Generated.args = {
  icon: QuestionMarkCircleIcon,
  text: 'Follow on our Social Link',
  link: 'https://bside.ai',
}

export const NaverBlogLink = (args) => {
  return <SocialLink {...args} />
}
NaverBlogLink.args = socialLinks.naverBlog

export const YoutubeLink = (args) => {
  return <SocialLink {...args} />
}
YoutubeLink.args = socialLinks.youtube

export const EmailLink = (args) => {
  return <SocialLink {...args} />
}
EmailLink.args = socialLinks.email

export default {
  title: 'Components/SocialLinks',
  component: SocialLinks,
  parameters: {
    componentSubtitle: 'Social Link UI with Icon and text',
  },
} as ComponentMeta<typeof SocialLinks>
