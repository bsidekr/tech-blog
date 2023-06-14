import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import SimpleLayout from 'src/layouts/SimpleLayout/SimpleLayout'

const TechPage = () => {
  return (
    <>
      <MetaTags title="Tech" description="Tech page" />
      <SimpleLayout
        title="개발 경험에 집중"
        intro="우리는 개발 경험에 집착하고 가능한 많은 boilerplate를 제거하고자 합니다. 당면한 문제를 우아하게 해결할 수 있는 방법이 있다면 우리는 사용할 것이며, 그렇지 않은 경우에는 자체 솔루션을 개발합니다. 최종 결과는 사랑에 빠질 수 있는 개발 경험입니다!"
      >
        <h1>Tech Spec 나열 예정</h1>
        <p>
          Find me in <code>./web/src/pages/TechPage/TechPage.tsx</code>
        </p>
        <p>
          My default route is named <code>tech</code>, link to me with `
          <Link to={routes.tech()}>Tech</Link>`
        </p>
      </SimpleLayout>
    </>
  )
}

export default TechPage
