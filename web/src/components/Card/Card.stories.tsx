import type { ComponentMeta } from '@storybook/react'

import { routes } from '@redwoodjs/router'

import Card from './Card'

export const articleCard = () => {
  const date = new Date()
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={routes.article({ id: 1 })}>
          React 기반 풀스택 프레임워크 RedwoodJs 소개
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={date.toISOString()}
          className="md:hidden"
          decorate
        >
          Sep 1, 2022
        </Card.Eyebrow>
        <Card.Description>
          국내에서 아직 많이 알려지지 않은 RedwoodJs 라는 툴을 소개하기 위해,
          RedwoodJs를 도입한 계기,다른 js 프레임워크와의 차이점, 그리고 1년 간
          사용하면서 느낀 장점을 공유해보고자 합니다. (22년 9월 작성, 23년 4월
          업데이트. 처음 RedwoodJs를 접했을때가 v0.24 쯤이였는데, 벌써 v5.0
          릴리즈를 앞두고 있네요. 회사의 기술 스택 소개와 좋은 툴을 국내에 많이
          알리고 싶은 마음에 글을 업데이트 합니다)
        </Card.Description>
        <Card.Cta>자세히 보기</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={date.toISOString()}
        className="mt-1 hidden md:block"
      >
        Sep 1, 2022
      </Card.Eyebrow>
    </article>
  )
}

export const techStackCard = () => {
  return (
    <ul className="grid grid-cols-1">
      <Card as="li" key="RedwoodJs">
        <div className="avatar-circle relative z-10 flex h-12 w-12 items-center justify-center">
          <img
            src="https://redwoodjs.com/images/diecut.svg"
            alt="redwoodJs icon"
            className="h-8 w-8"
          />
        </div>
        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
          <Card.Link href="https://redwoodjs.com/">RedwoodJs</Card.Link>
        </h2>
        <Card.Description>
          Focus on building your startup, not fighting your framework.
        </Card.Description>
        <p className="relative z-10 mt-6 flex transition group-hover:text-purple-500">
          <span className="ml-2">redwoodjs.com</span>
        </p>
      </Card>
    </ul>
  )
}

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Card>
