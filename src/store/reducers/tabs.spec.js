import { tabsReducer } from './tabs'
import { tabsSearchRequested, tabsSearchFetched, tabsSearchError } from '../actions/tabs'

describe('Tabs reducer', () => {
  const initialState = {
    isFetching: false,
    error: '',
    tabs: [
      {
        id: 461238,
        type: 'Song',
        title: 'Storm',
        artist: {
          id: 49108,
          type: 'Artist',
          nameWithoutThePrefix: 'Godspeed You! Black Emperor',
          useThePrefix: false,
          name: 'Godspeed You! Black Emperor',
        },
        chordsPresent: false,
        tabTypes: ['PLAYER'],
      },
    ],
  }

  const preFetchedState = {
    isFetching: true,
    error: '',
    tabs: [],
  }

  const fetchedTabs = [
    {
      id: 25305,
      type: 'Song',
      title: 'Godspeed',
      artist: {
        id: 6328,
        type: 'Artist',
        nameWithoutThePrefix: 'Anberlin',
        useThePrefix: false,
        name: 'Anberlin',
      },
      chordsPresent: false,
      tabTypes: ['PLAYER', 'TEXT_GUITAR_TAB', 'TEXT_BASS_TAB'],
    },
  ]

  const error = 'Found no tabs meeting your criteria'

  it('sets isFetching flag and flushes previously fetched tabs on tabs requested action', () => {
    const action = tabsSearchRequested('pattern')

    expect(tabsReducer(initialState, action)).toMatchObject({
      isFetching: true,
      error: '',
      tabs: [],
    })
  })

  it('adds new tabs and unsets isFetching flag on tabs fetched action', () => {
    const action = tabsSearchFetched(fetchedTabs)

    expect(tabsReducer(preFetchedState, action)).toMatchObject({
      isFetching: false,
      error: '',
      tabs: fetchedTabs,
    })
  })

  it('sets error message and unsets isFetching flag on tabs error action', () => {
    const action = tabsSearchError(error)

    expect(tabsReducer(preFetchedState, action)).toMatchObject({
      isFetching: false,
      error,
      tabs: [],
    })
  })
})
