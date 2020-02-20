import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { tabTypesMap, getTypeKey } from '../utils/strings'

const Container = styled.button`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: solid 1px ${({ theme }) => theme.colors.accent};
  display: flex;
  outline: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-right: 16px;
  border-radius: 8px;
  width: 100px;
  height: 45px;
`

const SelectList = styled.div`
  position: absolute;
  cursor: pointer;
  top: 55px;
  width: 100px;
  text-align: center;
  border-radius: 8px;
  border: solid 1px ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.secondary};
`

const Element = styled.div`
  width: 100%;
  padding: 8px 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  :hover {
    font-weight: bold;
  }
`

export const Select = ({ onSelect, tabType }) => {
  const [visible, setVisible] = React.useState(false)
  const onContainerClick = () => setVisible(!visible)
  const onBlur = () => setVisible(false)
  const onElementClick = key => {
    setVisible(false)
    onSelect(tabTypesMap[key])
  }

  return (
    <Container onClick={onContainerClick} onBlur={onBlur}>
      {getTypeKey(tabType)}
      {visible && (
        <SelectList>
          {Object.keys(tabTypesMap).map(key => (
            <Element key={key} onClick={() => onElementClick(key)}>
              {key}
            </Element>
          ))}
        </SelectList>
      )}
    </Container>
  )
}

Select.propTypes = {
  tabType: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}
