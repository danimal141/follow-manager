import Constants from 'expo-constants'
import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import rootEpic from './epics'
import rootReducer from './reducers'

let composeEnhancers = compose
const mode = Constants.manifest.releaseChannel
if (mode !== 'production' && typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}
const epicMiddleware = createEpicMiddleware()

export default function() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))
  epicMiddleware.run(rootEpic)
  return store
}
