import { render } from '@redwoodjs/testing/web'

import { techStacks } from 'src/pages/TechPage/techStack.values'

import TechStackCard from './TechStackCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TechStackCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TechStackCard {...techStacks[0]} />)
    }).not.toThrow()
  })
})
