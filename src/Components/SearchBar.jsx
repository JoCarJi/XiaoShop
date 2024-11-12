import React, { useState } from 'react'

export const SearchBar = ({setBrands}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    setBrands(brands => [...brands,inputValue]);

    setInputValue('')
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
    <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={(event) => onInputChange(event)}
    />
    </form>
  )
}
