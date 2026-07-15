import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({category , movies }) => {

  return (
  <div className='flex flex-col gap-6 text-white py-6'>
    <h1 className='px-8  text-4xl font-bold' >{category}</h1>
    <div className='flex gap-3 overflow-x-auto px-8' id='container'>
        { movies.map (( item , index ) => (
            <div  key={item.id}>
          <MovieCard  item ={item}  index ={index}  />
          </div>
        )
          )}
  
    </div>
  </div>
  )
}

export default MoviesList