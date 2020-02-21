import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { getStore, getPersistor } from './store'
import { SearchScreen } from './containers/SearchScreen'

export const App = () => (
  <Provider store={getStore()}>
    <PersistGate persistor={getPersistor()}>
      <SearchScreen />
    </PersistGate>
  </Provider>
)
