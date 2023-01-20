import React from 'react'
import { useState,  useEffect } from 'react';
import Movies from './Movies';


const NasaData = () => {
  const [collectionMovies, setCollectionMovies] = useState([])

  const API_KEY = '5fd1aee5c03d7868996530154a60c8fe';
  
  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&page=1`)
      .then(res => res.json())
      .then(res => setCollectionMovies(res.results))

  },[])

  return (
    <section className='grid grid-rows-5 grid-cols-4 gap-2 text-center'>
      {
        collectionMovies.map(movie =>{
          return <Movies key={movie.id} data={movie}/>
        })
      }
    </section>
  )
}

export default NasaData