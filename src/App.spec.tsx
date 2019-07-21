import * as React from 'react'
import * as renderer from 'react-test-renderer'

import App from './App'

describe('components/App', () => {
  it('should be rendered successfully', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
