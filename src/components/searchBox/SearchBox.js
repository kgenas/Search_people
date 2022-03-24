import React, { useState } from 'react'

export const SearchBox = ({ onSearch , onClose , isSearching }) => {
  const [ search , handleSearch ] = useState('');
  
  const handleSearchClick = () =>{
    handleSearch('');
    onClose();
  }
  const handleChange = ({ target : { value }}) =>{
    handleSearch( value );
  }
  const handleClick = () =>{
    onSearch(search);    
  }
  return (
    <div>
      <h2> Buscador de personal </h2>
      <br/>
      <div>
          <label>
              <input
                name='search'
                value={ search }
                onChange = { handleChange }
              />                            
          </label>
          <button
            onClick={ handleClick }
            disabled = {!search.length} 
          >
            BUscar
          </button>
          {isSearching && <button
                              onClick={ handleSearchClick }
                              disabled = { !search.length }
                          >
                            Cerrar
                          </button>
          }
      </div>
    </div>
  )
}
