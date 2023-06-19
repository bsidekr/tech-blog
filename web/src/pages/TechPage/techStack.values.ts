export const categories = ['App', 'DB / Infra', 'Web', 'Show All'] as const

export type TechCategory = (typeof categories)[number]

interface TechStack {
  categories: TechCategory[]
  label: string
  src: string
  description: string
  link: string
}

export const techStacks: TechStack[] = [
  {
    categories: ['Web'],
    label: 'RedwoodJs',
    src: 'https://redwoodjs.com/images/diecut.svg',
    description: 'Focus on building your startup, not fighting your framework.',
    link: 'https://redwoodjs.com/',
  },
  {
    categories: ['Web'],
    label: 'React',
    src: 'https://legacy.reactjs.org/favicon.ico',
    description: 'The library for web and native user interfaces',
    link: 'https://react.dev/',
  },
  {
    categories: ['Web'],
    label: 'GraphQL',
    src: 'https://graphql.org/img/logo.svg',
    description:
      'With a GraphQL API as your foundation, you can live in a multi-client world with ease.',
    link: 'https://graphql.org/',
  },
  {
    categories: ['Web'],
    label: 'Prisma',
    src: 'https://prismalens.vercel.app/header/prisma-logo.svg',
    description:
      'Prisma’s extremely popular ORM allows you to focus more on your business logic and less on the intricacies of SQL.',
    link: 'https://www.prisma.io/',
  },
  {
    categories: ['Web'],
    label: 'TypeScript',
    src: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
    description:
      'Optional TypeScript support gives you the best of JavaScript AND the best of a type system.',
    link: 'https://www.typescriptlang.org/',
  },
  {
    categories: ['Web'],
    label: 'Jest',
    src: 'https://jestjs.io/img/jest.png',
    description:
      'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.',
    link: 'https://jestjs.io/',
  },
  {
    categories: ['Web'],
    label: 'Storybook',
    src: 'https://storybook.js.org/images/logos/icon-storybook.png',
    description:
      'Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It’s open source and free.',
    link: 'https://storybook.js.org/',
  },
  {
    categories: ['Web'],
    label: 'TailwindCSS',
    src: 'https://tailwindcss.com/favicons/apple-touch-icon.png?v=3',
    description:
      'Rapidly build modern websites without ever leaving your HTML.',
    link: 'https://tailwindcss.com/',
  },
  {
    categories: ['DB / Infra'],
    label: 'AWS',
    src: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
    description:
      'Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud, offering over 200 fully featured services from data centers globally.',
    link: 'https://aws.amazon.com/',
  },
  {
    categories: ['DB / Infra'],
    label: 'Github Action',
    src: 'https://github.githubassets.com/favicons/favicon.png',
    description:
      'GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. ',
    link: 'https://github.com/features/actions',
  },
  {
    categories: ['DB / Infra'],
    label: 'Firebase App Distribution',
    src: 'https://www.gstatic.com/devrel-devsite/prod/vd261db5395fbcde659314ae58be50b2e56876271e1a672f069cc1e37ad6c3a79/firebase/images/favicon.png',
    description:
      'Firebase App Distribution makes distributing your apps to trusted testers painless.',
    link: 'https://firebase.google.com/docs/app-distribution',
  },
  {
    categories: ['DB / Infra'],
    label: 'Coherence',
    src: 'https://uploads-ssl.webflow.com/6462990f476598b6fd0c9cd1/6462990f476598b6fd0c9d45_fav.png',
    description:
      'Coherence delivers automated environments across the full software development lifecycle, without requiring you to glue together your own mess of open source tools to get a world-class develper experience for your team.',
    link: 'https://www.withcoherence.com/',
  },
  {
    categories: ['Web'],
    label: 'serverless',
    src: 'https://assets-global.website-files.com/60acbb950c4d6606963e1fed/60ffa106b035c8bc6a4b210e_favicon%20(1).png',
    description:
      'All-in-one development solution for auto-scaling apps on AWS Lambda',
    link: 'https://www.serverless.com/',
  },
  {
    categories: ['App'],
    label: 'Flutter',
    src: 'https://storage.googleapis.com/cms-storage-bucket/4fd0db61df0567c0f352.png',
    description:
      'Flutter transforms the app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase.',
    link: 'https://flutter.dev/',
  },
  {
    categories: ['App'],
    label: 'GetX',
    src: 'https://raw.githubusercontent.com/jonataslaw/getx-community/master/get.png',
    description:
      'GetX is an extra-light and powerful solution for Flutter. It combines high-performance state management, intelligent dependency injection, and route management quickly and practically.',
    link: 'https://pub.dev/packages/get',
  },
  {
    categories: ['DB / Infra'],
    label: 'PostgreSQL',
    src: 'https://www.postgresql.org/media/img/about/press/elephant.png',
    description: "The World's Most Advanced Open Source Relational Database",
    link: 'https://www.postgresql.org/',
  },
]
