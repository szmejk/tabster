import { combineReducers } from 'redux'
import { tabsReducer } from './tabs'
import { preferencesReducer } from './preferences'

export const rootReducer = combineReducers({ preferences: preferencesReducer, tabs: tabsReducer })
