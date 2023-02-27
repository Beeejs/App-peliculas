import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FavoritesContext } from '../context/contextFavorites';
import { ThemeContext } from '../context/contextTheme'
import noCharge from './no-carga.png'


const Movies = ({data,collection}) => {
  const {theme} = useContext(ThemeContext)
  const {listMovies,deleteFavoriteMovie,addFavoriteMovie} = useContext(FavoritesContext)
  const navigate = useNavigate()

  const {id,title,poster_path} = data;
  const IMG_PATH = 'https://image.tmdb.org/t/p/original';

  const handleClick = () => {
    navigate(`/detail/${data.title}/${data.id}`)
  }

  return (
    <div className={`w-[300px] ${theme === 'light' ? 'bg-[#1a1a1a]' : 'bg-whiteTnue'} !p-4 !my-10 !mx-[50px] rounded-3xl cursor-pointer hover:scale-105 hover:bg-transparent duration-200 ease`} id='element-movie'> 
      <div className='w-full h-16 text-center'>
        <h1 className={`!text-[20px] ${theme === 'light' ? 'text-whiteTnue' : 'text-backNt'} !m-5 !font-montserrat`}>{title}</h1>
      </div> 
      <div className='flex justify-center items-center' onClick={handleClick}>
        <img className='tablet:w-[200px] tablet:h-[300px] w-[250px] h-[400px] border-4 border-redNt' src={poster_path ? IMG_PATH + poster_path : noCharge} alt={'IMG -' + title} />
      </div>
      <div className='flex justify-center items-center'>
       <button className='rounded-md !mt-4 !p-5 bg-redNt' onClick={() => listMovies.find(movie => movie.id === id) ? deleteFavoriteMovie(id) : addFavoriteMovie(data)}>
        <i className={listMovies.find(movie => movie.id === id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
       </button>
      </div>
    </div>
  )
}

export default Movies