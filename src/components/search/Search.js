import { useState } from 'react'
import { SearchBox } from '../searchBox/SearchBox'
import { SearchList } from '../searchResult/SearchList';
import { SearchReult } from '../searchResult/SearchReult'

export const Search = () => {

  const [ListResult,setListResult]= useState([]);
  const [isSearching, setSearching ]= useState(false);
  const handlSearchClick =( search ) =>{      
        setSearching(true);        
        setListResult(SearchReult(search));               
  }

  const handleCloseClick = ()=>{
    setSearching(false);
    setListResult([]);
  }
  return (
    <div>
        <SearchBox
          onSearch = { handlSearchClick }
          onClose = { handleCloseClick }
          isSearching = { isSearching }
        />
        <SearchList
          result = { ListResult }
          isSearching = { isSearching }
        />
    </div>
  )
}
