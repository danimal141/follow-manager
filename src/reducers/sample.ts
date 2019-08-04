import { AnyAction } from 'redux'

export type SampleState = number

export const initialState = 0

export default (state: SampleState = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state
  }
}
