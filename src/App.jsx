import React from 'react'
import { Provider } from 'react-redux'
import { getStore } from './store'

export const App = () => (
  <Provider store={getStore()}>
    <div className="App">tabster</div>
  </Provider>
)
