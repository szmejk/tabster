import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getTypeKey } from '../utils/strings'

const Container = styled.a`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 700px;
  text-decoration: none;
  outline: none;
  min-height: 70px;
  border-radius: 8px;
  margin-bottom: 18px;
  display: flex;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transition: background-color 0.25s ease-in, color 0.25s ease-in, box-shadow 0.25s ease-in-out;
  :hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  @media (max-width: 750px) {
    width: 540px;
  }

  @media (max-width: 600px) {
    width: 345px;
    flex-direction: column;
    padding: 12px 0;
  }
`
const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 600px) {
    margin-right: auto;
    margin-left: 18px;
    margin-bottom: 12px;
  }
`
const Artist = styled.span`
  font-size: 18px;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 4px;
  }
`
const Title = styled.span`
  font-size: 14px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`

const ChipsContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`

const Chip = styled.div`
  margin: 0 4px;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textSecondary};
  @media (max-width: 600px) {
    padding: 2px 4px;
  }
`

export const Card = ({ url, tab: { artist, title, tabTypes } }) => (
  <Container href={url} target="_blank">
    <SongContainer>
      <Artist>{artist.name}</Artist>
      <Title>{title}</Title>
    </SongContainer>
    <ChipsContainer>
      {tabTypes.map(type => (
        <Chip key={type}>{getTypeKey(type)}</Chip>
      ))}
    </ChipsContainer>
  </Container>
)

Card.propTypes = {
  url: PropTypes.string.isRequired,
  tab: PropTypes.shape({
    artist: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    tabTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}
