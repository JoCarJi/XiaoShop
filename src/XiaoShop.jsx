import React from 'react';
import { useState } from 'react';
import { SearchBar } from './Components/SearchBar';

export const XiaoShop = () => {

    const [brands, setBrands] = useState(['Mac', 'HPP','Clinique']);

    const onSearchBrand = () =>{
        setBrands([...brands,'Unique']);
    }

  return (
    <>
        <h1>XiaoShop</h1>

        <SearchBar setBrands={setBrands}/>

        <ol>
            {brands.map( brand => {
                return <li key={brand}>{brand}</li>
            })}
        </ol>
    </>
  )
}
