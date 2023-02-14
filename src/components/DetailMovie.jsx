import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ModalVideo from '../componentsBp/Modal'
import StarsRating from './StartRating/StartRating'


const DetailMovie = () => {

  const [findMovieDetail, setFindMovieDetail] = useState([])
  const {movieId} = useParams()
  const navigate = useNavigate()

  const API_KEY = '5fd1aee5c03d7868996530154a60c8fe';
  const IMG_PATH = 'https://image.tmdb.org/t/p/original';

  const {
    title,
    backdrop_path,
    vote_average,
    release_date,
    genres,
    adult,
    overview
  } = findMovieDetail;

  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=es-ES&append_to_response=videos`)//url para videos
      .then(peticion => peticion.json())
      .then(movie => {
        setFindMovieDetail(movie)
      })

  },[movieId])


  return (
    <section className='flex h-screen w-screen' style={{
      backgroundImage:`url(${(backdrop_path === undefined ? null : IMG_PATH) + backdrop_path})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
    }}>
      <div className='flex items-center justify-center p-5 h-full w-8/12'>
        {
          <ModalVideo data={findMovieDetail}/>
        }
      </div>
      <div className='flex items-center justify-center p-5 bg-[#181818] opacity-90 h-screen w-screen'>
        <div className='w-9/12'>
          <h1 className='font-montserrat font-extrabold text-white text-center mb-10'>{title}</h1>
          <h3 className='font-unbounded text-redNt text-2xl'>Fecha de lanzamiento: {release_date}</h3>
          <p className='text-white font-montserrat text-lg'>{overview}</p>
          <h4 className='font-unbounded text-redNt text-2xl font-semibold bg-white w-fit p-2 my-4 rounded-sm'>{adult ? '+18' : 'ATP'}</h4>
          <div className='flex items-center justify-start gap-3 my-4'>
            {
              genres ? genres.map(generos =>{
                return <h4 className='text-white' key={generos.id}> <span className='text-redNt'>|</span> {generos.name} <span className='text-redNt'>|</span> </h4>
              }):
              null
            }
          </div>
          <StarsRating stars={vote_average}/>
        </div>
      </div>
      <div className='bg-[#181818] opacity-90 p-3'>
        <div className='flex justify-center items-center bg-redNt rounded-md !p-2 cursor-pointer border-2 border-transparent hover:bg-transparent hover:border-redNt duration-200 ease' onClick={() => navigate(-1)}>
            <button className='text-sm text-white font-montserrat font-bold !mr-2'>Volver</button>
            <i className="fa-solid fa-right-from-bracket text-white text-sm"></i>
        </div>
      </div>
    </section>
  )
}

export default DetailMovie