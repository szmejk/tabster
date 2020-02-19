import { PREFERENCES_ACTIONS } from '../actions/preferences'
import { tabTypes } from '../../utils/constants'

const initialState = {
  type: tabTypes.all,
}

export const preferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREFERENCES_ACTIONS.UPDATE_TABS_TYPE: {
      return {
        ...state,
        type: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
