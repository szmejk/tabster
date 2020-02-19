import { TABS_ACTIONS } from '../actions/tabs'

const initialState = {
  isFetching: false,
  error: '',
  tabs: [],
}

export const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TABS_ACTIONS.REQUESTED: {
      return {
        isFetching: true,
        error: '',
        tabs: [],
      }
    }
    case TABS_ACTIONS.FETCHED: {
      return {
        ...state,
        isFetching: false,
        tabs: action.payload,
      }
    }
    case TABS_ACTIONS.ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
