import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './reducers'
import { rootSaga } from './sagas'

let store = null
let persistor = null

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['preferences'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const initStore = () => {
  if (!store) {
    store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
    persistor = persistStore(store)
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

export const getPersistor = () => {
  if (!store || !persistor) {
    initStore()
  }
  return persistor
}
