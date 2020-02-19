export const PREFERENCES_ACTIONS = {
  UPDATE_TABS_TYPE: '@preferences/update_tabs_type',
}

export const updateTabsType = type => ({
  type: PREFERENCES_ACTIONS.UPDATE_TABS_TYPE,
  payload: type,
})
