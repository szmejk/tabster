import { PREFERENCES_ACTIONS } from '../actions/preferences'
import { tabTypesMap } from '../../utils/strings'

const initialState = {
  type: tabTypesMap.all,
  theme: 'light',
}

export const preferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREFERENCES_ACTIONS.UPDATE_TABS_TYPE: {
      return {
        ...state,
        type: action.payload,
      }
    }
    case PREFERENCES_ACTIONS.UPDATE_THEME: {
      return {
        ...state,
        theme: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
