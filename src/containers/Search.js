import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { tabsSearchRequested } from '../store/actions/tabs'
import { updateTabsType } from '../store/actions/preferences'
import { SearchButton } from '../components/SearchButton'
import { SearchBar } from '../components/SearchBar'
import { Select } from '../components/Select'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 45px;
  margin-bottom: 48px;
  @media (max-width: 600px) {
    height: 35px;
    margin-bottom: 32px;
  }
`
const mapStateToProps = state => ({
  tabType: state.preferences.type,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: pattern => dispatch(tabsSearchRequested(pattern)),
  onSelect: type => dispatch(updateTabsType(type)),
})

export const SearchContainer = ({ onSubmit, onSelect, tabType }) => {
  const [inputValue, setInputValue] = React.useState('')

  const onInputChange = e => setInputValue(e.target.value)
  const onKeyDown = e => e.key === 'Enter' && onSubmit(inputValue)
  const onButtonClick = () => onSubmit(inputValue)
  return (
    <Container>
      <SearchBar value={inputValue} onChange={onInputChange} onKeyDown={onKeyDown} />
      <Select onSelect={onSelect} tabType={tabType} />
      <SearchButton onClick={onButtonClick} />
    </Container>
  )
}

SearchContainer.propTypes = {
  tabType: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export const Search = connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
