import React, { useState } from 'react'
import styled from 'styled-components';

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
]

const getStoredTheme = () => {
  const localTheme = window.localStorage.getItem('theme');
  return options.find(obj => obj.value === localTheme);
}

const ButtonGroup = styled.div`
  position: absolute;
  display: inline-flex;

  > * + * {
    margin-left: -1px !important;
  }
`

const Button = styled.button`
  box-sizing: border-box;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.25em 0.5em;
  border: 1px solid ${props => props.selected ? "green" : "red"};
  color: ${props => props.selected ? "green" : "red"};
  z-index: ${props => props.selected ? "3" : "1"};

  &:hover {
    z-index: 5;
    box-shadow: 0 0 3px rgba(0,0,0,0.14), 0 0 3px rgba(0,0,0,0.21);
  }

  &:first-child {
    border-radius: 0.25em 0 0 0.25em;
  }

  &:last-child {
    border-radius: 0 0.25em 0.25em 0;
  }
`

const ThemeSelector = ({ theme, toggleTheme }) => {
  const [selectedOption, setSelectedOption] = useState(getStoredTheme().value);;

  const handleChange = (e) => {
    const selectedTheme = e.target.value;
    toggleTheme(selectedTheme);
    setSelectedOption(selectedTheme);
  }

  return (
    <>
      <ButtonGroup>
        { options.map( option =>
        <Button key={option.value} value={option.value} onClick={handleChange} selected={option.value === selectedOption}>{option.label}</Button>
        )}
        
      </ButtonGroup>
    </>
  )
}

export default ThemeSelector;
