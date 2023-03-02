import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FavoritesContext } from '../context/contextFavorites'
import { SearchContext } from '../context/contextSearch'
import Movies from './Movies'
import { ThemeContext } from '../context/contextTheme'
/* Slick */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FavoriteMovies = () => {
  const {theme} = useContext(ThemeContext)
  const {listMovies} = useContext(FavoritesContext)
  const {search} = useContext(SearchContext)
  const navigate = useNavigate()
  
  
  const filterMovies = () =>{
    return listMovies.filter(movie => movie.title.toLowerCase().includes(search.toString().toLowerCase()))
  }
  
  const settings = {
    className: "slider",
    dots: true,
    infinite: true,
    slidesToShow: listMovies.length >= 6 ? 4 : 1,
    slidesToScroll: listMovies.length >= 6 ? 2 : 1,
  };


  return (
    <>
      <div className='tablet:!mx-5 tablet:flex-col tablet:!px-0 tablet:items-end flex justify-between items-center !mx-10 mt-[130px] mb-[70px] !px-2'>
        <h1 className={`tablet:order-2 tablet:w-full tablet:mt-20 tablet:mb-5 text-4xl text-center ${theme === 'light' ? 'text-white' : 'text-backNt font-extrabold'}   font-montserrat`}>Peliculas Favoritas</h1>
        <div className='tablet:order-1 flex justify-center items-center bg-redNt rounded-md !p-2 cursor-pointer border-2 border-transparent hover:bg-transparent hover:border-redNt duration-200 ease' onClick={() => navigate('/')}>
          <button className={`text-sm ${theme === 'light' ? 'text-white' : 'text-backNt font-extrabold'} font-montserrat font-bold !mr-2`}>Volver</button>
          <i className={`fa-solid fa-right-from-bracket ${theme === 'light' ? 'text-white' : 'text-backNt font-extrabold'} text-sm`}></i>
        </div>
      </div>

      {
        listMovies.length ?
        (
          <>
          {/* Slider for Desktop */}
            <Slider {...settings} className="desktopS:!hidden overflow-hidden pb-8 mx-[150px] desktop:mx-[0px]">
              {
                filterMovies().map((movie) =>{
                  return <Movies key={movie.id} data={movie}/>
                })
              }
            </Slider>


          {/* Off SLider */}
          <section className='desktopMF:hidden flex justify-center items-center flex-wrap text-center'>
            <div className={`tablet:!mb-[130px] w-fit h-[650px] overflow-auto ${theme === 'light' ? 'bg-[#323232]' : 'bg-whiteTnue'} rounded-2xl div-mobile mb-10 snap-y scroll-smooth`}>
              {
                filterMovies().map((movie) =>{
                  return <Movies key={movie.id} data={movie} collection={listMovies}/>
                })
              }
            </div>
          </section>

              {
                (filterMovies().length ? null : (
                  <div className='flex items-center justify-center h-screen'>
                    <h1 className='notebookS:text-center text-[20px] text-white !m-5 font-montserrat font-bold'>No se encuentra en tu lista de favoritos<span> </span><i className="fa-solid fa-heart"></i></h1>
                  </div>
                )
                )
              }
          </>
                      
        )


        :
          <div className='flex justify-center items-center h-screen'>
            <div className='text-center'>
              <h1 className='text-[20px] text-white !m-5 font-montserrat font-bold'>No hay peliculas favoritas<span> </span><i className="fa-regular fa-face-frown"></i></h1>
              <p className='text-[15px] text-whiteTnue font-unbounded'>Para agregar a tu lista de favoritos, tiene que darle al corazón que está debajo de la película</p>
            </div>
          </div>
      }
    </>
  )
}

export default FavoriteMovies