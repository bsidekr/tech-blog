import ArticleListCell from 'src/components/Article/ArticleListCell'
import SimpleLayout from 'src/layouts/SimpleLayout/SimpleLayout'

const ArticleListPage = () => {
  return (
    <>
      <SimpleLayout
        title="직면한 문제 너머를 고민하는 것"
        intro="우리는 문제와 해법에 접근하는 태도와 방식, 철학에 차이가 있다고 생각하며, 프로그래밍, 상품 디자인, 스타트업 등에 대한 우리의 생각들을 시간순으로 정리했습니다."
      >
        <ArticleListCell />
      </SimpleLayout>
    </>
  )
}

export default ArticleListPage
