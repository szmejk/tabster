import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  height: 100%;
  width: 460px;
  padding: 11px 24px;
  margin-right: 16px;
  border-radius: 8px;
  border: none;
  outline: none;
  transition: background-color 0.25s ease-in, color 0.25s ease-in;
  :hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  @media (max-width: 750px) {
    width: 300px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    width: 200px;
    margin-right: 8px;
  }
`

export const SearchBar = ({ onChange, value, onKeyDown }) => (
  <Input value={value} placeholder="Search for tabs - eg. Led Zeppelin" onChange={onChange} onKeyDown={onKeyDown} />
)

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}
