import { render } from '@redwoodjs/testing/web'

import ArticleListPage from './ArticleListPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ArticleListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticleListPage />)
    }).not.toThrow()
  })
})
