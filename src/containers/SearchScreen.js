import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'
import { Search } from './Search'
import { List } from './List'
import { updateTheme } from '../store/actions/preferences'
import { GlobalStyles } from '../styles/global'
import { lightTheme, darkTheme } from '../styles/themes'
import { themeTypes } from '../utils/strings'

const mapStateToProps = state => ({
  preferences: state.preferences,
})

const mapDispatchToProps = dispatch => ({
  toggleTheme: theme => dispatch(updateTheme(theme)),
})

const SearchScreenContainer = ({ preferences, toggleTheme }) => {
  return (
    <ThemeProvider theme={preferences.theme === themeTypes.light ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header themePrefered={preferences.theme} toggleTheme={toggleTheme} />
      <Search />
      <List />
    </ThemeProvider>
  )
}

SearchScreenContainer.propTypes = {
  preferences: PropTypes.shape({
    type: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
  }).isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export const SearchScreen = connect(mapStateToProps, mapDispatchToProps)(SearchScreenContainer)
