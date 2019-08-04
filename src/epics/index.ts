import { Action } from 'redux'
import { combineEpics } from 'redux-observable'

export default combineEpics<Action, Action>()
