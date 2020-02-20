import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'
import { Card } from '../components/Card'
import { tabLinkBuilder } from '../utils/strings'

const mapStateToProps = state => ({
  isFetching: state.tabs.isFetching,
  error: state.tabs.error,
  tabs: state.tabs.tabs,
})

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const ListContainer = ({ isFetching, error, tabs, theme }) => {
  if (isFetching) {
    return (
      <ListWrapper>
        <ReactLoading type="spinningBubbles" color={theme.colors.secondary} />
      </ListWrapper>
    )
  }
  if (error) {
    return (
      <ListWrapper>
        <div> {error} </div>
      </ListWrapper>
    )
  }
  return tabs.map(tab => (
    <ListWrapper>
      <Card url={tabLinkBuilder(tab.id)} key={tab.id} tab={tab} />
    </ListWrapper>
  ))
}

ListContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      artist: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
      tabTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
}

export const List = connect(mapStateToProps)(withTheme(ListContainer))
