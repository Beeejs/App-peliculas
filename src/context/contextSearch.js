import React, { createContext, useState } from 'react'

export const SearchContext = createContext(null)

const ContextSearch = ({children}) => {

  const [search, setSearch] = useState([]);

  const searchMovie = (e) =>{
    setSearch(e.target.value)
  }

  return (
    <SearchContext.Provider value={{searchMovie,search}}>
      {children}
    </SearchContext.Provider>
  )
}

export default ContextSearch