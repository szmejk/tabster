import React from 'react'
import { Provider } from 'react-redux'
import { getStore } from './store'
import { SearchScreen } from './containers/SearchScreen'

export const App = () => (
  <Provider store={getStore()}>
    <SearchScreen />
  </Provider>
)
