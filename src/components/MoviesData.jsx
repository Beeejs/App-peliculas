import React, { useContext } from 'react'
import { useState,  useEffect } from 'react';
import Movies from './Movies';
/* React-Bootstrap */
import SpinnerLoad from '../componentsBp/SpinnerLoad';
import { SearchContext } from '../context/contextSearch';


const MoviesData = () => {
  const [collectionMovies, setCollectionMovies] = useState([])
  const {search} = useContext(SearchContext)

  const API_KEY = '5fd1aee5c03d7868996530154a60c8fe';

  //primary_release_year=2022

  /* 
    Errores

    -solucionar favoritos algunos no se agregan
    -solucionar el loading en la busqueda

    Agregar

    -react-slick

  */

  useEffect(() =>{
    !search.length
      ?
      (
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES`)
        .then(peticion => peticion.json())
        .then(res => setCollectionMovies(res.results))
      )
      :
      (
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&language=es-ES`)
        .then(peticion => peticion.json())
        .then(res => setCollectionMovies(res.results))
      )

  },[search])



  return (
    <>
  
      {
        collectionMovies.length ?
        (
          <>
            <section className='grid grid-rows-5 grid-cols-4 gap-5 text-center'> 
              {
                collectionMovies.map(movie =>{
                  return <Movies key={movie.id} data={movie}/>
                })
              }
            </section>
              {
                (
                  collectionMovies.length ? null : (
                    <div className='flex items-center justify-center h-screen'>
                      <h1 className='text-[20px] text-white !m-5 font-montserrat font-bold'>No se encuentra disponible la pelicula que buscas o no existe <i className="fa-regular fa-face-frown"></i></h1>
                    </div>
                  )
                )
              }
          </>
        )
        :
        <SpinnerLoad/>

      }
    </>
  )
}

export default MoviesData