// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Article> = (args) => {
//   return <Article {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Article from './Article'

const CONTENT = `국내에서 아직 많이 알려지지 않은 RedwoodJs 라는 툴을 소개하기 위해,
RedwoodJs를 도입한 계기,다른 js 프레임워크와의 차이점, 그리고 1년 간
사용하면서 느낀 장점을 공유해보고자 합니다. (22년 9월 작성, 23년 4월
업데이트. 처음 RedwoodJs를 접했을때가 v0.24 쯤이였는데, 벌써 v5.0
릴리즈를 앞두고 있네요. 회사의 기술 스택 소개와 좋은 툴을 국내에 많이
알리고 싶은 마음에 글을 업데이트 합니다)`

const ARTICLE = {
  id: 1,
  title: 'React 기반 풀스택 프레임워크 RedwoodJs 소개',
  body: CONTENT,
  summary: CONTENT,
  thumbnail: '',
  createdAt: '2023-05-23T07:20:19.984Z',
  user: {
    name: '소재우',
    roles: '',
    id: 1,
    email: '',
    posts: [],
  },
}

export const full = () => {
  return (
    <div className="mx-auto max-w-3xl">
      <Article article={ARTICLE} />
    </div>
  )
}

export default {
  title: 'Components/Article',
  component: Article,
} as ComponentMeta<typeof Article>
