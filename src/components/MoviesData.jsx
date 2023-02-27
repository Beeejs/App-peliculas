import React, { useContext } from 'react'
import { useState,  useEffect } from 'react';
import Movies from './Movies';
/* React-Bootstrap */
import SpinnerLoad from '../componentsBp/SpinnerLoad';
import { SearchContext } from '../context/contextSearch';
/* Slick */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MoviesData = () => {
  const [getDataApi, setGetDataApi] = useState([])
  const [collectionMovies, setCollectionMovies] = useState([])
  const [windowWidth, setWindowWidth] = useState(JSON.parse(localStorage.getItem('valueWindow')))
  const {search} = useContext(SearchContext)

  const API_KEY = '5fd1aee5c03d7868996530154a60c8fe';


  const settings = {
    className: "slider",
    dots: true,
    infinite: true,
    slidesToShow: windowWidth ? 1 : collectionMovies.length >= 6 ? 4 : 1 ,
    slidesToScroll: windowWidth ? 1 : collectionMovies.length >= 6 ? 2 : 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    vertical: windowWidth,
    verticalSwiping: windowWidth
  };

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
        .then(res => {
          setCollectionMovies(res.results)
          setGetDataApi(res)
        })
      )

      
    const settingsSlider = () =>{
      if(window.innerWidth <= 1400){
        setWindowWidth(true)
        localStorage.setItem('valueWindow',true)
      }else{
        setWindowWidth(false)
        localStorage.setItem('valueWindow',false)
      }
    }

    window.addEventListener('resize',settingsSlider)

    return() =>{
      window.removeEventListener('resize',settingsSlider)
    }


  },[search])


  return (
    <>
  
      {
        getDataApi.total_results !== 0 ?
        (
          collectionMovies.length ?
          (
            <>
             {/*  <section className='grid grid-rows-5 grid-cols-4 gap-5 text-center'> */}
              <Slider {...settings} className="overflow-hidden mx-[150px] desktop:mx-[0px] desktop:mt-[50px]">
                {
                  collectionMovies.map(movie =>{
                    return <Movies key={movie.id} data={movie} collection={collectionMovies}/>
                  })
                }
              </Slider>
            </>
          )
          :
          <SpinnerLoad/>
        ):
        <div className='flex items-center justify-center h-screen'>
          <h1 className='text-[20px] text-white !m-5 font-montserrat font-bold'>No se encuentra disponible la pelicula que buscas o no existe <i className="fa-regular fa-face-frown"></i></h1>
        </div>

      }
    </>
  )
}

export default MoviesData