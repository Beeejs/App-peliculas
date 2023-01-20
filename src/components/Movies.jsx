import React from 'react'

const Movies = ({data}) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/original';

  return (
    <div className={'bg-[#1f1f1f] p-4 m-6 rounded-3xl '}>
      <div className='w-full h-16'>
        <h1 className={'text-2xl text-whiteTnue m-5 font-montserrat'}>{data.title}</h1>
      </div> 
      <div className='flex justify-center items-center'>
        <img className='w-[250px]' src={IMG_PATH + data.poster_path} alt={'IMG -' + data.title} />
      </div>
    </div>
  )
}

export default Movies