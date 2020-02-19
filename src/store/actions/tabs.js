export const TABS_ACTIONS = {
  REQUESTED: '@tabs/requested',
  FETCHED: '@tabs/fetched',
  ERROR: '@tabs/error',
}

export const tabsSearchRequested = pattern => ({
  type: TABS_ACTIONS.REQUESTED,
  payload: pattern,
})

export const tabsSearchFetched = tabs => ({
  type: TABS_ACTIONS.FETCHED,
  payload: tabs,
})

export const tabsSearchError = error => ({
  type: TABS_ACTIONS.ERROR,
  payload: error,
})
