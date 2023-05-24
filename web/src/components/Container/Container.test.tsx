import { render } from '@redwoodjs/testing/web'

import Container from './Container'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Container', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Container />)
    }).not.toThrow()
  })
})
