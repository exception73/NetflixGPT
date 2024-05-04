import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)

  return (

    <div className='bg-black'>
        <div className="-mt-56 z-10 relative ">
      <MovieList  title={"Now Playing"} movies = {movies?.nowPlayingMovies}/>
      <MovieList  title={"Trending"} movies = {movies?.popularMovies}/>
      <MovieList  title={"Upcoming Movies"} movies = {movies?.nowPlayingMovies}/>
      <MovieList  title={"Thriller"} movies = {movies?.nowPlayingMovies}/>
    </div>
    </div>
  
  )
}

export default SecondaryContainer