import { Icon } from '../Icon'

import { socialLinks } from './SocialLinks.utils'

interface SocialLinkProps {
  icon?: any
  svg?: any
  link?: string
  text: string
}

export const SocialLink = ({ icon, svg, link, text }: SocialLinkProps) => {
  return (
    <a
      href={link}
      className="flex items-center gap-x-2 opacity-80 hover:opacity-100"
      target="_blank"
      rel="noreferrer"
    >
      {svg ? (
        <Icon icon={svg} className="h-9 w-9 fill-gray-500" />
      ) : (
        <Icon icon={icon} color="gray" size="md" />
      )}
      <span className="whitespace-nowrap font-medium">{text}</span>
    </a>
  )
}

const LinkDivider = () => {
  return <div className="my-6 h-[1px] bg-gray-100" />
}

const SocialLinkGroupWrapper = ({ children }) => {
  return <div className="flex flex-col gap-y-4">{children}</div>
}

const SocialLinks = () => {
  return (
    <>
      <SocialLinkGroupWrapper>
        <SocialLink {...socialLinks.naverBlog} />
        <SocialLink {...socialLinks.youtube} />
      </SocialLinkGroupWrapper>
      <LinkDivider />
      <SocialLinkGroupWrapper>
        <SocialLink {...socialLinks.email} />
      </SocialLinkGroupWrapper>
    </>
  )
}

export default SocialLinks
