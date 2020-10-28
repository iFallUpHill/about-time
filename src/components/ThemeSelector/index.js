import React, { useState } from 'react'
import Select from 'react-select'

const options = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' }
]

const defaultValue = () => {
  const localTheme = window.localStorage.getItem('theme');
  const respectSystemTheme = JSON.parse(window.localStorage.getItem('respect-system-theme'));
  return respectSystemTheme ? options[0] : (localTheme === 'light' ? options[1] : options[2]);
}


const ThemeSelector = ({ theme, toggleTheme }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue());

  const handleChange = (e) => {
    setSelectedOption(e);
    toggleTheme(e.value);
  }

  return (
    <Select 
      defaultValue={selectedOption}
      onChange={handleChange}
      options={options}
    />
  )
}

export default ThemeSelector;
