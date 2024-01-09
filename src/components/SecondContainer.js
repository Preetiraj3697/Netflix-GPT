import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div className="-mt-24 relative z-20 py-2" >
      <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MoviesList title={"Popular"} movies={movies?.popularMovies} />
      <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies} />
      <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies} />
      <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MoviesList title={"Popular"} movies={movies?.popularMovies} />
      <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies} />
      <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies} />
    </div>
  )
}

export default SecondContainer