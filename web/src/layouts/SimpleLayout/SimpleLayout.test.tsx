import { render } from '@redwoodjs/testing/web'

import SimpleLayout from './SimpleLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SimpleLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SimpleLayout />)
    }).not.toThrow()
  })
})
