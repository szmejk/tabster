import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  font-size: 14px;
  text-align: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.textSecondary};
  background-color: ${({ theme }) => theme.colors.accent};
  padding: 0 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`

export const SearchButton = ({ onClick }) => <Button onClick={onClick}>Search</Button>

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}
