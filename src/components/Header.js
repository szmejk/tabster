import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  margin: 32px 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
const Title = styled.h1`
  font-size: 48px;
  font-weight: normal;
  margin: 0;
`

export const Header = () => (
  <HeaderContainer>
    <Title>tabster</Title>
  </HeaderContainer>
)
