import { updateTabsType, updateTheme } from '../actions/preferences'
import { preferencesReducer } from './preferences'
import { tabTypesMap, themeTypes } from '../../utils/strings'

describe('Preferences reducer', () => {
  const initialState = {
    type: tabTypesMap.all,
    theme: themeTypes.light,
  }

  it('should update prefered tab type ', () => {
    const updateAction = updateTabsType(tabTypesMap.chords)

    expect(preferencesReducer(initialState, updateAction)).toMatchObject({
      ...initialState,
      type: tabTypesMap.chords,
    })
  })

  it('should update prefered theme', () => {
    const updateAction = updateTheme(themeTypes.dark)

    expect(preferencesReducer(initialState, updateAction)).toMatchObject({
      ...initialState,
      theme: themeTypes.dark,
    })
  })
})
