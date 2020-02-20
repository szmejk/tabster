import { updateTabsType } from '../actions/preferences'
import { preferencesReducer } from './preferences'
import { tabTypes } from '../../utils/strings'

describe('Preferences reducer', () => {
  it('should update prefered tab type ', () => {
    const updateAction = updateTabsType(tabTypes.chords)

    expect(preferencesReducer({}, updateAction)).toMatchObject({
      type: tabTypes.chords,
    })
  })
})
