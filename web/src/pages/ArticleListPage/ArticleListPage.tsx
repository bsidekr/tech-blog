import { MetaTags } from '@redwoodjs/web'

import ArticleListCell from 'src/components/Article/ArticleListCell'
import SimpleLayout from 'src/layouts/SimpleLayout/SimpleLayout'

const ArticleListPage = () => {
  return (
    <>
      <MetaTags
        title="Articles"
        description="All of our long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
      />
      <SimpleLayout
        title="직면한 문제 너머를 고민하는 것이 더 훌륭한 제품을 만들 수  있다고 생각합니다."
        intro="우리는 문제와 해법에 접근하는 태도와 방식, 철학에 차이가 있다고 생각하며, 프로그래밍, 상품 디자인, 스타트업 등에 대한 우리의 생각들을 시간순으로 정리했습니다."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <ArticleListCell />
        </div>
      </SimpleLayout>
    </>
  )
}

export default ArticleListPage
