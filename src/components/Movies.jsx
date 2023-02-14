import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FavoritesContext } from '../context/contextFavorites';
import noCharge from './no-carga.png'


const Movies = ({data}) => {

  const {listMovies,deleteFavoriteMovie,addFavoriteMovie} = useContext(FavoritesContext)
  const navigate = useNavigate()

  const {id,title,poster_path} = data;
  const IMG_PATH = 'https://image.tmdb.org/t/p/original';

  const handleClick = () => {
    navigate(`/detail/${data.title}/${data.id}`)
  }

  return (
    <div className={'bg-[#1a1a1a] !p-4 !my-10 !mx-[50px] rounded-3xl cursor-pointer hover:scale-105 hover:bg-transparent duration-200 ease'}> 
      <div className='w-full h-16'>
        <h1 className={'!text-[20px] text-whiteTnue !m-5 !font-montserrat'}>{title}</h1>
      </div> 
      <div className='flex justify-center items-center' onClick={handleClick}>
        <img className='w-[250px] border-4 border-redNt' src={poster_path ? IMG_PATH + poster_path : noCharge} alt={'IMG -' + title} />
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