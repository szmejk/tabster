export const tabTypes = {
  all: 'ALL',
  chords: 'CHORDS',
  guitar: 'TEXT_GUITAR_TAB',
  player: 'PLAYER',
  bass: 'TEXT_BASS_TAB',
}

export const tabsUrlBuilder = pattern => `http://www.songsterr.com/a/ra/songs.json?pattern=${pattern}`
