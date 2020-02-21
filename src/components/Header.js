import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Switch from '@material-ui/core/Switch'
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined'
import Brightness3OutlinedIcon from '@material-ui/icons/Brightness3Outlined'

const HeaderContainer = styled.header`
  margin: 32px 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 600px) {
    margin: 16px 24px;
  }
`
const Title = styled.h1`
  font-size: 48px;
  font-weight: normal;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 36px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
`
const SwitchContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const HeaderComp = ({ themePrefered, toggleTheme }) => (
  <HeaderContainer>
    <Title>tabster</Title>
    <SwitchContainer>
      <WbSunnyOutlinedIcon />
      <Switch
        color="default"
        checked={themePrefered !== 'light'}
        onChange={themePrefered === 'light' ? () => toggleTheme('dark') : () => toggleTheme('light')}
      />
      <Brightness3OutlinedIcon />
    </SwitchContainer>
  </HeaderContainer>
)

HeaderComp.propTypes = {
  themePrefered: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      accent: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export const Header = withTheme(HeaderComp)
