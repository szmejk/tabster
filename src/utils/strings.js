export const tabTypesMap = {
  all: 'ALL',
  chords: 'CHORDS',
  guitar: 'TEXT_GUITAR_TAB',
  player: 'PLAYER',
  bass: 'TEXT_BASS_TAB',
}

export const getTypeKey = type => {
  const keys = Object.keys(tabTypesMap)
  const values = Object.values(tabTypesMap)
  return keys[values.findIndex(val => val === type)]
}

export const themeTypes = {
  light: 'light',
  dark: 'dark',
}

export const tabsUrlBuilder = pattern => `http://www.songsterr.com/a/ra/songs.json?pattern=${pattern}`

export const tabLinkBuilder = id => `http://www.songsterr.com/a/wa/song?id=${id}`
