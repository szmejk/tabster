import { validateTabs, validateTab } from './validators'

describe('validateTabs', () => {
  it('returns null if there is no data present', () => {
    expect(validateTabs({})).toEqual(null)
  })

  it('returns null on empty data array', () => {
    expect(validateTabs({ data: [] })).toEqual(null)
  })
})

describe('validateTab', () => {
  const correctTab = {
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
  }

  const incorrectTab = {
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
  }

  it('returns null if tab data is malformed', () => {
    expect(validateTab(incorrectTab)).toEqual(null)
  })

  it('return tab if tab data is correct', () => {
    expect(validateTab(correctTab)).toMatchObject(correctTab)
  })
})
