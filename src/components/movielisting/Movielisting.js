import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../moviecard/Moviecard'
import './Movielisting.scss'

export default function Movielisting() {

  const movies = useSelector(state => state.movies.movies);

  let renderMovies = "";
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className='movie-reponse-error'>
      <h3>{movies.Error}</h3>
    </div>
  )

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>
    </div>
  );
}