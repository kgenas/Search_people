import { SearchListItem } from './SearchListItem';

export const SearchList = ({ result, isSearching }) => {
    
  return (
    <div>     
      {!result?.length && isSearching && <p className='search--top'>No existen result</p>}      
      { result?.map((value)=>{
            return(                
                <SearchListItem
                    key = { value.id }
                    {...value}
                />
            )
        })}        
    </div>
  )
}
