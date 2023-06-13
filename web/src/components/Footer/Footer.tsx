import { InnerContainer, OuterContainer } from '../Container'
import Logo, { LogoContainer } from '../header/Logo/Logo'

import links from './Footer.values'

const Footer = () => {
  const items = links.map((link) => (
    <a
      href={link.link}
      key={link.name}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
      target="_blank"
      rel="noreferrer"
    >
      {link.label}
    </a>
  ))

  return (
    <footer className="mt-32">
      <OuterContainer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <InnerContainer>
            <div className="flex flex-col-reverse items-start justify-between gap-16 md:flex-row md:items-center">
              <div className="grid w-full grid-cols-2 gap-x-8 gap-y-4 font-medium text-zinc-800 dark:text-zinc-200 md:flex md:w-fit md:flex-wrap">
                {items}
              </div>
              <div className="flex items-center gap-4 md:flex-col md:items-end">
                <LogoContainer>
                  <Logo />
                </LogoContainer>
                <span>비사이드코리아</span>
              </div>
            </div>
          </InnerContainer>
        </div>
      </OuterContainer>
    </footer>
  )
}

export default Footer
