import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FavoritesContext } from '../context/contextFavorites'
import { SearchContext } from '../context/contextSearch'
import Movies from './Movies'
/* Slick */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FavoriteMovies = () => {
  const {listMovies} = useContext(FavoritesContext)
  const {search} = useContext(SearchContext)
  const [windowWidth, setWindowWidth] = useState(JSON.parse(localStorage.getItem('valueWindow')))
  const navigate = useNavigate()
  
  
  const filterMovies = () =>{
    return listMovies.filter(movie => movie.title.toLowerCase().includes(search.toString().toLowerCase()))
  }

  useEffect(() =>{
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

  })
  
  const settings = {
    className: "slider",
    dots: true,
    infinite: true,
    slidesToShow: windowWidth ? 1 : listMovies.length >= 6 ? 4 : 1,
    slidesToScroll: windowWidth ? 1 : listMovies.length >= 6 ? 2 : 1,
    vertical: windowWidth,
    verticalSwiping: windowWidth
  };


  return (
    <>
      <div className='tablet:!mx-5 tablet:flex-col tablet:!px-0 tablet:items-end flex justify-between items-center !mx-10 mt-[130px] mb-[70px] !px-2'>
        <h1 className='tablet:order-2 tablet:w-full tablet:mt-6 text-4xl text-center text-white font-montserrat'>Peliculas Favoritas</h1>
        <div className='tablet:order-1 flex justify-center items-center bg-redNt rounded-md !p-2 cursor-pointer border-2 border-transparent hover:bg-transparent hover:border-redNt duration-200 ease' onClick={() => navigate('/')}>
          <button className='text-sm text-white font-montserrat font-bold !mr-2'>Volver</button>
          <i className="fa-solid fa-right-from-bracket text-white text-sm"></i>
        </div>
      </div>

      {
        listMovies.length ?
        (
          <>
            <Slider {...settings} className="overflow-hidden pb-8 mx-[150px] desktop:mx-[0px]">
              {
                filterMovies().map((movie) =>{
                  return <Movies key={movie.id} data={movie} collection={listMovies}/>
                })
              }
            </Slider>

              {
                (filterMovies().length ? null : (
                  <div className='flex items-center justify-center h-screen'>
                    <h1 className='text-[20px] text-white !m-5 font-montserrat font-bold'>No se encuentra en tu lista de favoritos <i className="fa-solid fa-heart"></i></h1>
                  </div>
                )
                )
              }
          </>
                      
        )


        :
          <div className='flex justify-center items-center h-screen'>
            <div className='text-center'>
              <h1 className='text-[20px] text-white !m-5 font-montserrat font-bold'>No hay peliculas favoritas <i className="fa-regular fa-face-frown"></i></h1>
              <p className='text-[15px] text-whiteTnue font-unbounded'>Para agregar a tu lista de favoritos, tiene que darle al corazón que está debajo de la película</p>
            </div>
          </div>
      }
    </>
  )
}

export default FavoriteMovies