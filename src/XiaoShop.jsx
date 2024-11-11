import React from 'react';
import { useState } from 'react';

export const XiaoShop = () => {

    const [brands, setBrands] = useState(['Mac', 'HPP','Clinique']);

    const onAddBrand = () =>{
        setBrands([...brands,'Unique']);
    }

  return (
    <>
        <h1>XiaoShop</h1>

        <button onClick={onAddBrand}>Agregar</button>

        <ol>
            {brands.map( brand => {
                return <li key={brand}>{brand}</li>
            })}
        </ol>
    </>
  )
}
