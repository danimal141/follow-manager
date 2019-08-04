import { combineReducers, Reducer } from 'redux'
import sample, { SampleState, initialState as initialSample } from './sample'

export const initialState = {
  sample: initialSample,
}

export interface State {
  sample: SampleState
}

export default combineReducers({
  sample,
}) as Reducer<State>
