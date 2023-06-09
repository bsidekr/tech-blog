import { render } from '@redwoodjs/testing/web'

import ArticleCard from './ArticleCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ArticleCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticleCard />)
    }).not.toThrow()
  })
})
