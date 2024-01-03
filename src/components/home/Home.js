import React, { useEffect } from 'react'
import Movielisting from '../movielisting/Movielisting'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovie } from '../../features/movies/MovieSlice'
    
export default function Home() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAsyncMovie());
  }, [dispatch]);

  return (    
    <div>
      <div className="banner">
      </div>
      <Movielisting></Movielisting>
    </div>
  )
}
