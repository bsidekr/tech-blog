import { render } from '@redwoodjs/testing/web'

import ArticleCard from './ArticleCard'
import { standard } from './ArticleCard.mock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ArticleCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticleCard article={standard().article} />)
    }).not.toThrow()
  })
})
