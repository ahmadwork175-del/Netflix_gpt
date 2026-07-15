import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const MoviesContainer = () => {
 const movies = useSelector(Store => Store.movies)

  return (
    <div className='  bg-black'>
      <div className='-mt-55 relative z-50'>
      <MoviesList category = {"Now play Movies"}  movies={movies?.nowPlayMovies}/>
      <MoviesList category = {"Trending"}  movies={movies?.trendingMovies}/>
      <MoviesList category = {"Popular"}  movies={movies?.popularMovies}/>
      <MoviesList category = {"Upcoming Movies "}  movies={movies?.upcomingMovies}/>
      </div>
    </div>
  )
}

export default MoviesContainer