import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetFullDetails, removeMovies } from '../../features/movies/MovieSlice';
import { useParams } from 'react-router-dom';
import './Moviedetail.scss';

export default function Moviedetail() {
  const [toggle, setToggle] = useState(1)

  const toogletab = (index) => {
    setToggle(index);
  }

  let { imdbID } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetFullDetails(imdbID));
    return () => {
      dispatch(removeMovies())
    };
  }, [dispatch, imdbID])

  const getalldata = useSelector(state => state.movies.getDetails);
  console.log(getalldata);

  return (

    <div className="content-wrapper">
      <div className="banner">
        <img src={getalldata.Poster} className='poster-movie' alt="" />
      </div>
      <div className="details">
        <h3>{getalldata.Title}</h3>
        <div className="aboutdetail">
          <span>{getalldata.Year} |</span>
          <span>{getalldata.Runtime} |</span>
          <span>{getalldata.Rated} </span>
        </div>
        <div className="content-tabs">
          <div className='btn'>
            <button className={toggle === 1 ? "active" : "none"} onClick={() => toogletab(1)}>OVERVIEW</button>
            <button style={{ minWidth: "124px" }} className={toggle === 2 ? "active" : "none"} onClick={() => toogletab(2)}>RATING</button>
            <button style={{ minWidth: "124px" }} className={toggle === 3 ? "active" : "none"} onClick={() => toogletab(3)}>More</button>
          </div>
          <div className={toggle === 1 ? "content" : "non-content"}>
            <p className='plot'>{getalldata.Plot}</p>
            <spam>Director: </spam>  <p className='plot' style={{ display: "inline-block", marginTop: "15px" }}>{getalldata.Director}</p>
          </div>
          {/* {getalldata.Ratings((rat ,index) => (
            <div  key ={index} className={toggle === 2 ? "content" : "non-content"}>
              <p className='plot'>{getalldata.imdbRating}</p>
              <p className='plot'>{rat.source}</p>
              <p className='plot'>{getalldata.Metascore}</p>
            </div>
          ))
          } */}
          <div className={toggle === 2 ? "content" : "non-content"}>
            <p className='plot'>{getalldata.imdbRating}</p>
            <p className='plot'>{getalldata.imdbVotes}</p>
            <p className='plot'>{getalldata.Metascore}</p>
          </div>
          <div className={toggle === 3 ? "content" : "non-content"}>
            <p className='plot'>{getalldata.Language}</p>
            <p className='plot'>{getalldata.Actors}</p>
            <p className='plot'>{getalldata.Awards}</p>

          </div>
        </div>
      </div>
    </div>
  )
}
