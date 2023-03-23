import React, { useContext } from 'react'
import { useState,  useEffect } from 'react';
import Movies from './Movies';
import { ThemeContext } from '../context/contextTheme';
import apiPlace from './api-place.jfif'
/* React-Bootstrap */
import SpinnerLoad from '../componentsBp/SpinnerLoad';
import { SearchContext } from '../context/contextSearch';
/* Slick */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MoviesData = () => {
  const {theme} = useContext(ThemeContext)
  const [getDataApi, setGetDataApi] = useState([])
  const [collectionMovies, setCollectionMovies] = useState([])
  const {search} = useContext(SearchContext)

  const API_KEY = '5fd1aee5c03d7868996530154a60c8fe';


  const settings = {
    className: "slider",
    dots: true,
    infinite: true,
    slidesToShow: collectionMovies.length >= 6 ? 4 : 1 ,
    slidesToScroll: collectionMovies.length >= 6 ? 2 : 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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

  },[search])


  return (
    <>
  
      {
        getDataApi.total_results !== 0 ?
        (
          collectionMovies.length ?
          (
            <>
             {/* Slider for Desktop */}
              <div className='desktopS:!hidden tablet:!mx-5 tablet:flex-col tablet:!px-0 tablet:items-end flex justify-between items-center !mx-10 mt-[130px] mb-[70px] !px-2'>
                <h1 className={`tablet:order-2 tablet:w-full tablet:mt-6 text-4xl text-center ${theme === 'light' ? 'text-white' : 'text-backNt font-extrabold'} font-montserrat`}>{search.length ? `Resultados de su busqueda: ${search}` : 'Estrenos'}</h1>
                <a aria-label="Hecho en TMDB" data-balloon-pos="up" href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                  <img src={apiPlace} alt="api-tmdb" className='w-[70px] rounded-full'/>
                </a>
              </div>
              <Slider {...settings} className="desktopS:!hidden overflow-hidden mx-[150px] pb-8 desktop:mx-[0px] desktop:mt-[50px]">
                {
                  collectionMovies.map(movie =>{
                    return <Movies key={movie.id} data={movie} collection={collectionMovies}/>
                  })
                }
              </Slider>

              {/* Off SLider */}
              <div className='desktopMF:hidden tablet:!mx-5 tablet:flex-col tablet:!px-0 tablet:items-end flex justify-between items-center !mx-10 mt-[130px] mb-[70px] !px-2'>
                <h1 className={`tablet:order-2 tablet:w-full tablet:mt-12 text-4xl text-center ${theme === 'light' ? 'text-white' : 'text-backNt font-extrabold'} font-montserrat`}>{search.length ? `Resultados de su busqueda: ${search}` : 'Estrenos'}</h1>
                <a aria-label="Hecho en TMDB" data-balloon-pos="up" href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                  <img src={apiPlace} alt="api-tmdb" className='w-[70px] rounded-full'/>
                </a>
              </div>
              <section className='desktopMF:hidden flex justify-center items-center flex-wrap text-center h-[80vh]'>
                <div className={`w-fit h-[650px] overflow-auto ${theme === 'light' ? 'bg-[#323232]' : 'bg-whiteTnue'} rounded-2xl div-mobile mb-10 snap-y scroll-smooth`}>
                  {
                    collectionMovies.map((movie) =>{
                      return <Movies key={movie.id} data={movie}/>
                    })
                  }
                </div>
              </section>
            </>
          )
          :
          <SpinnerLoad/>
        ):
        <div className='flex items-center justify-center h-screen'>
          <h1 className={`notebookS:text-center text-[20px] ${theme === 'light' ? 'text-white' : 'text-backNt font-extrabold'} !m-5 font-montserrat font-bold`}>No se encuentra disponible la pelicula que buscas o no existe<span> </span><i className="fa-regular fa-face-frown"></i></h1>
        </div>

      }
    </>
  )
}

export default MoviesData