export const validateTab = tab => {
  if (
    !tab ||
    !tab.id ||
    !tab.title ||
    !tab.type === 'Song' ||
    !tab.tabTypes ||
    !Array.isArray(tab.tabTypes) ||
    !tab.artist ||
    !tab.artist.name
  ) {
    return null
  }
  return tab
}

export const validateTabs = response => {
  if (!response || !response.data || !Array.isArray(response.data) || response.data.length === 0) {
    return null
  }
  return response.data.map(tab => validateTab(tab)).filter(tab => tab != null) // response.data.map(tab => validateTab(tab))
}
