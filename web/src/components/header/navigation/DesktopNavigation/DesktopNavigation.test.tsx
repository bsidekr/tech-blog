import { render } from '@redwoodjs/testing/web'

import DesktopNavigation from './DesktopNavigation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DesktopNavigation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DesktopNavigation />)
    }).not.toThrow()
  })
})
