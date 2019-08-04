import * as React from 'react'
import * as renderer from 'react-test-renderer'

import Root from './Root'

describe('components/Root', () => {
  it('should be rendered successfully', () => {
    const component = renderer.create(<Root />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
