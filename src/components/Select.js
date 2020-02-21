import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import { tabTypesMap, getTypeKey } from '../utils/strings'

const Container = styled.button`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  border: none;
  outline: none;
  width: 100px;
  height: 100%;
  margin-right: 16px;
  padding: 0 16px;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  transition: background-color 0.25s ease-in, color 0.25s ease-in;

  :hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  @media (max-width: 600px) {
    font-size: 12px;
    margin-right: 8px;
    padding: 0 4px;
    width: 70px;
  }
`

const SelectList = styled.div`
  position: absolute;
  cursor: pointer;
  top: 55px;
  left: 0;
  width: 100px;
  text-align: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: 600px) {
    width: 70px;
  }
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
      {visible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
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
