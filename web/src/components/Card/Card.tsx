import { ReactNode } from 'react'

import { clsx } from '@mantine/core'

import { Link } from '@redwoodjs/router'

import { ChevronRightIcon } from 'src/components/Icon'

type CardProps<C extends React.ElementType = 'div'> = {
  as?: C
  className?: string
  children: ReactNode
}

function Card<C extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: CardProps<C>) {
  const Component = as || 'div'
  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  )
}

interface CardLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

Card.Link = function CardLink({ children, ...props }: CardLinkProps) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
      <Link to={props.href} {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

type CardTitleProps<C extends React.ElementType> = {
  as?: C
  href?: string
  children: ReactNode
} & React.ComponentPropsWithoutRef<C>

Card.Title = function CardTitle<C extends React.ElementType>({
  as,
  href,
  children,
}: CardTitleProps<C>) {
  const Component = as || 'h2'
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

interface CardDescriptionProps {
  children: ReactNode
}

Card.Description = function CardDescription({
  children,
}: CardDescriptionProps) {
  return <p className="relative z-10 mt-2 text-sm">{children}</p>
}

interface CardCtaProps {
  children: ReactNode
}

Card.Cta = function CardCta({ children }: CardCtaProps) {
  return (
    <div
      aria-hidden="true"
      className="cta relative z-10 mt-4 flex items-center text-sm"
    >
      {children}
      <ChevronRightIcon className="ml-1 stroke-current" size="xs" />
    </div>
  )
}

type CardEyebrowProps<C extends React.ElementType> = {
  as?: C
  decorate?: boolean
  className?: string
  children: ReactNode
} & React.ComponentPropsWithoutRef<C>

Card.Eyebrow = function CardEyebrow<C extends React.ElementType>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: CardEyebrowProps<C>) {
  const Component = as || 'p'
  return (
    <Component
      className={clsx(
        className,
        'label relative z-10 order-first mb-3 flex items-center',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  )
}

export default Card
