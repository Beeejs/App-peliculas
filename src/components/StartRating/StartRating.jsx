import React from 'react'
import './styles.css'

const StarsRating = ({stars}) =>{

  const maxStars = 5;

  const resPorcentaje = ((stars / 2) / maxStars) * 100;

  const startStyles = () =>{
    return {
      width: resPorcentaje + '%'
    }
  }
  
  return(
    <>
      <div className='stars-empty'>
        <div className='stars-fill' style={startStyles()}></div>
      </div>
    </>
  )
}

export default StarsRating