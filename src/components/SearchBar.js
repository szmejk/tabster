import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  font-size: 14px;
  height: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 11px 24px;
  width: 430px;
  margin-right: 16px;
  border-radius: 8px;
  border: solid 1px ${({ theme }) => theme.colors.accent};
  outline: none;
`

export const SearchBar = ({ onChange, value, onKeyDown }) => (
  <Input value={value} onChange={onChange} onKeyDown={onKeyDown} />
)

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}
