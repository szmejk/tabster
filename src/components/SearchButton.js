import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  font-size: 14px;
  text-align: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.textSecondary};
  background-color: ${({ theme }) => theme.colors.accent};
  transition: background-color 0.25s ease-in, color 0.25s ease-in;
  padding: 0 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  :hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 0 8px;
  }
`

export const SearchButton = ({ onClick }) => <Button onClick={onClick}>Search</Button>

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}
