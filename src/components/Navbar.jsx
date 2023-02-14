import React from 'react'
import { useContext } from 'react'
import { useHref, useNavigate } from 'react-router-dom'
import { SearchContext } from '../context/contextSearch'
import { ThemeContext } from '../context/contextTheme'

const Navbar = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const {searchMovie} = useContext(SearchContext)
  const navigate = useNavigate()
  const urlLocal = useHref()
  const condition = urlLocal === '/' || urlLocal === '/favorites';

  return (
    <div className={`flex justify-between items-center p-5 ${condition ?  null : 'hidden'} ${theme === 'light' ? 'bg-blackSemi' : 'bg-whiteTnue'} duration-200 ease-in-out`}>
      <div className='w-[300px] my-10 mx-5'>
        <img src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="IMG-Logo" />
      </div>
      <div className={`flex justify-center items-center border-2 ${theme === 'light' ? 'border-whiteTnue' : 'border-blackSemi'} bg-backNt rounded-md`}>
        <div className='border-r-2 rounded-lg'>
          <i className="fa-solid fa-magnifying-glass m-2 text-white"></i>
        </div>
        <input className='w-[500px] py-2 px-3 bg-backNt text-sm text-white font-unbounded focus:outline-none placeholder:text-slate-400' type="text" placeholder='Buscar pelicula' onChange={(e) => searchMovie(e)}/>
      </div>
      <div className='flex justify-between items-center gap-4'>
        <div className='p-3 bg-redNt rounded-lg'>
          <button aria-label="Peliculas Favoritas" data-balloon-pos="up" className='bg-backNt p-2 rounded-full mx-2 hover:scale-125 duration-200 ease' onClick={() => navigate('/favorites')}>
            <i className="fa-solid fa-heart-circle-plus text-white m-1"></i>
          </button>
        </div>
        <div className='p-3 bg-redNt rounded-lg'>
          <button className='bg-backNt p-2 rounded-full mx-2 hover:scale-125 duration-200 ease' onClick={toggleTheme}>
            <i className={`fa-regular text-white m-1 ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar