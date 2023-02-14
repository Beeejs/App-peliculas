import React, { createContext } from 'react'
import useLocalStorage from '../customs/useLocalStorage'

export const FavoritesContext = createContext(null)

const ContextFavorites = ({children}) => {
  let [listMovies, setListMovies] = useLocalStorage('Favorites',[])

  const addFavoriteMovie = movie =>{
    const addMovie = [...listMovies,movie]
    const esIgual = listMovies.some(data => data.id === movie.id)
  
    if(esIgual){
      return null
    }else{
      setListMovies(addMovie)
    }
  }

  const deleteFavoriteMovie = id =>{
    const filterMovies = listMovies.filter(movie => movie.id !== id)
    setListMovies(filterMovies)
  }

  return (
    <FavoritesContext.Provider value={{listMovies ,addFavoriteMovie, deleteFavoriteMovie}}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default ContextFavorites