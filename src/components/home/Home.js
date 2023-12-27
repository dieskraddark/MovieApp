import React, { useEffect } from 'react'
import Movielisting from '../movielisting/Movielisting'
import Movieapi from '../../common/apis/Movieapi'
import { APIKEY } from '../../common/apis/Movieapikey'
import { useDispatch} from 'react-redux'
import { addmovies } from '../../features/movies/MovieSlice'

export default function Home() {

  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const movieTitle = "batman"
    try {
      const response = await Movieapi.get(`?apiKey=${APIKEY}&s=${movieTitle}&type=movie`)
      const movies = response.data;
      dispatch(addmovies(movies));
    }
    catch (error) {
      console.log('error fetching movies:', error);
    }

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
