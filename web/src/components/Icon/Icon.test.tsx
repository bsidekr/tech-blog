import { render } from '@redwoodjs/testing/web'

import { ChevronRightIcon } from './Icon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Icon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChevronRightIcon />)
    }).not.toThrow()
  })
})
