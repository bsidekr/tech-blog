import { LinkIcon } from '@heroicons/react/24/outline'

import Card from '../Card/Card'

interface TechStackCardProps {
  label: string
  src: string
  description: string
  link: string
}

const TechStackCard = ({
  label,
  src,
  description,
  link,
}: TechStackCardProps) => {
  return (
    <Card as="li" key={label}>
      <div className="avatar-circle relative z-10 flex h-12 w-12 items-center justify-center">
        <img src={src} alt={label} className="h-8 w-8 object-cover" />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <Card.Link as="a" href={link} target="_blank" rel="noreferrer">
          {label}
        </Card.Link>
      </h2>
      <Card.Description>{description}</Card.Description>
      <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-purple-500 dark:text-zinc-200">
        <LinkIcon className="h-4 w-4 flex-none stroke-2" />
        <span className="ml-2">{link}</span>
      </p>
    </Card>
  )
}

export default TechStackCard
