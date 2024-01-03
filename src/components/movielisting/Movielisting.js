import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../moviecard/Moviecard'
import './Movielisting.scss'

export default function Movielisting() {

  const movies = useSelector(state => state.movies.movies);
  const series = useSelector(state=> state.movies.series);
  console.log(series.Search);
  let renderMovies, renderShows = "";
  
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className='movie-reponse-error'>
      <h3>{movies.Error}</h3>
    </div>
  );
  renderShows = series.Response === "True" ? (
    series.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className='movie-reponse-error'>
      <h3>{series.Error}</h3>
    </div>
  )

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="movie-container">
          {renderMovies}
          {renderShows}
        </div>
      </div>
    </div>
  );
}