import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { tabsSearchRequested } from '../store/actions/tabs'
import { SearchButton } from '../components/SearchButton'
import { SearchBar } from '../components/SearchBar'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 45px;
  margin-bottom: 48px;
`
const mapDispatchToProps = dispatch => ({
  onSubmit: pattern => dispatch(tabsSearchRequested(pattern)),
})

export const SearchContainer = ({ onSubmit }) => {
  const [inputValue, setInputValue] = React.useState('')

  const onInputChange = e => setInputValue(e.target.value)
  const onKeyDown = e => e.key === 'Enter' && onSubmit(inputValue)
  const onButtonClick = () => onSubmit(inputValue)
  return (
    <Container>
      <SearchBar value={inputValue} onChange={onInputChange} onKeyDown={onKeyDown} />
      <SearchButton onClick={onButtonClick} />
    </Container>
  )
}

SearchContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export const Search = connect(null, mapDispatchToProps)(SearchContainer)
