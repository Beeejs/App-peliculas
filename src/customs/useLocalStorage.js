import { useState } from 'react'

const useLocalStorage = (key,initialValue) => {

  const [storageValue, setStorageValue] = useState(() =>{
    try {
      const movie = localStorage.getItem(key)//obtenemos los datos de LS, lo guarfamos en movie.
      return (movie ? JSON.parse(movie) : initialValue)//retornamos movie, en caso de que sea false es [], sino lo parseamos.
    } catch (error) {
      return initialValue //en caso de un error retornamos el initalValue => []
    }
  })//storageValue su valor puede ser => [] o {...}

  const setValue = value =>{
    try {
      setStorageValue(value)//guardamos el value en storageValue
      localStorage.setItem(key,JSON.stringify(value))//almacenamos en el LS los datos
    } catch (error) {
      console.log(error)
    }
  }//setValue su valor puede ser => [] o {...}(más común)

  return [storageValue, setValue]

}

export default useLocalStorage