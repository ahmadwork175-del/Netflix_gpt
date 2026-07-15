import React from 'react'
import { posterPath } from '../utils/constant'

const MovieCard = ({ item,index}) => {
  
    return (
    <div className='w-50 cursor-pointer '>
      <img className='w-full' src={posterPath + item?.poster_path
} alt={index.title}></img>
    </div>
  )
}

export default MovieCard