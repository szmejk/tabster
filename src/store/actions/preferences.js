export const PREFERENCES_ACTIONS = {
  UPDATE_TABS_TYPE: '@preferences/update_tabs_type',
  UPDATE_THEME: '@preferences/update_theme',
}

export const updateTabsType = type => ({
  type: PREFERENCES_ACTIONS.UPDATE_TABS_TYPE,
  payload: type,
})

export const updateTheme = theme => ({
  type: PREFERENCES_ACTIONS.UPDATE_THEME,
  payload: theme,
})
