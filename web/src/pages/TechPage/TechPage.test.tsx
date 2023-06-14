import { render } from '@redwoodjs/testing/web'

import TechPage from './TechPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TechPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TechPage />)
    }).not.toThrow()
  })
})
