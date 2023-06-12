import { render } from '@redwoodjs/testing/web'

import MobileNavigation from './MobileNavigation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MobileNavigation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MobileNavigation />)
    }).not.toThrow()
  })
})
