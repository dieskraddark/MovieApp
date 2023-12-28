import React, { useEffect } from 'react'
import Movielisting from '../movielisting/Movielisting'
import Movieapi from '../../common/apis/Movieapi'
import { APIKEY } from '../../common/apis/Movieapikey'
import { useDispatch } from 'react-redux'
import { addmovies } from '../../features/movies/MovieSlice'

export default function Home() {

  

  const fetchMovies = async () => {
  }
  useEffect(() => {
    fetchMovies();

  }, []);

  return (
    <div>
      <div className="banner">
      </div>
      <Movielisting></Movielisting>
    </div>
  )
}
