import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './reducers'
import { rootSaga } from './sagas'

let store = null

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

const initStore = () => {
  if (!store) {
    store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(rootSaga)
  }
  return store
}

export const getStore = () => {
  if (!store) {
    initStore()
  }
  return store
}
