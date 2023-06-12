import { ChevronRightIcon as HeroRightIcon } from '@heroicons/react/24/solid'
import { Icon as TremorIcon } from '@tremor/react'

interface IconProps {
  icon?: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string
      titleId?: string
    } & React.RefAttributes<SVGSVGElement>
  >
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'simple' | 'light' | 'shadow' | 'solid' | 'outlined'
  color?:
    | 'slate'
    | 'gray'
    | 'zinc'
    | 'neutral'
    | 'stone'
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose'
}

export function Icon({
  icon = HeroRightIcon,
  size = 'sm',
  variant = 'simple',
  color = 'purple',
  className,
  ...props
}: IconProps) {
  return (
    <TremorIcon
      size={size}
      variant={variant}
      color={color}
      className={className}
      icon={icon}
      {...props}
    />
  )
}
