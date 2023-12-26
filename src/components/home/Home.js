import React, { useEffect } from 'react'
import Movielisting from '../movielisting/Movielisting'
import Movieapi from '../../common/apis/Movieapi'
import { APIKEY } from '../../common/apis/Movieapikey'

export default function Home() {
  const fetchMovies = async () => {
    const movieTitle = "batman"
    try {
      const response = await Movieapi.get(`?apiKey=${APIKEY}&s=${movieTitle}&type=movie`);
      const movies = response.data;
    }
    catch (error) {
      console.log('error fetching movies:', error)
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
