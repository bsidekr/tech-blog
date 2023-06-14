import { HTMLAttributes, forwardRef } from 'react'

import { clsx } from '@mantine/core'

type ContainerProps = HTMLAttributes<HTMLDivElement>

export const OuterContainer = forwardRef<HTMLDivElement, ContainerProps>(
  function OuterContainer({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={(clsx('sm:px-8'), className)} {...props}>
        <div className="mx-auto max-w-7xl sm:px-8">{children}</div>
      </div>
    )
  }
)

export const InnerContainer = forwardRef<HTMLDivElement, ContainerProps>(
  function InnerContainer({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx('relative px-4 sm:px-12', className)}
        {...props}
      >
        <div>{children}</div>
      </div>
    )
  }
)

type ContainerComponent = React.ForwardRefExoticComponent<
  ContainerProps & React.RefAttributes<HTMLDivElement>
>

const ContainerRoot: ContainerComponent = forwardRef<
  HTMLDivElement,
  ContainerProps
>(function Container({ children, ...props }, ref) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})

const Container = Object.assign(ContainerRoot, {
  Outer: OuterContainer,
  Inner: InnerContainer,
})

export default Container
