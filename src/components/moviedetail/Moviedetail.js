import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetFullDetails,removeMovies } from '../../features/movies/MovieSlice';
import { useParams } from 'react-router-dom';
import './Moviedetail.scss';

export default function Moviedetail() {
  let { imdbID } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetFullDetails(imdbID));
    return ()=>{
      dispatch(removeMovies())
    };
  }, [dispatch, imdbID])

  const getalldata = useSelector(state => state.movies.getDetails);
  console.log(getalldata);



  return (
    <div className="main-content">
      <div className="poster">
        <img src={getalldata.Poster} className='poster-movie' alt="" width={"100%"} height={'100%'} />
      </div>
      <div className="content-wrapper">
        <div className="banner">
          <img src={getalldata.Poster} className='poster-movie' alt="" />
        </div>
        <div className="details">
          <h3>{getalldata.Title}</h3>
          <div className="aboutdetail">
            <span>{getalldata.Year}</span>
            <span>{getalldata.Runtime}</span>
            <span>{getalldata.Rated}</span>
          </div>
          <div className="moredetails">
            <span >{getalldata.Genre}</span>
            
          </div>
        </div>
        <div className="rating"></div>
      </div>


    </div>
  )
}
