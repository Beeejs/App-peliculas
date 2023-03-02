import React, { createContext } from 'react'
import useLocalStorage from '../customs/useLocalStorage'
import Swal from 'sweetalert2'

export const FavoritesContext = createContext(null)

const ContextFavorites = ({children}) => {
  let [listMovies, setListMovies] = useLocalStorage('Favorites',[])

  const addFavoriteMovie = movie =>{
    const addMovie = [...listMovies,movie]
    const esIgual = listMovies.some(data => data.id === movie.id)
  
    if(esIgual){
      return null
    }else{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: `Se agregó "${movie.title}" a tu lista de favoritos!`
      })
      setListMovies(addMovie)
    }
  }

  const deleteFavoriteMovie = id =>{
    const filterMovies = listMovies.filter(movie => movie.id !== id)
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: 'Se removió de tu lista de favoritos!'
    })
    setListMovies(filterMovies)
  }

  return (
    <FavoritesContext.Provider value={{listMovies ,addFavoriteMovie, deleteFavoriteMovie}}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default ContextFavorites