import React from 'react'
import { Link } from 'react-router-dom';
import './Moviecard.scss'
export default function Moviecard(props) {
  const { data } = props;
  return (
    <div className='card-item'>
      <div className="class-inner">
        <Link to={`/movie/${data.imdbID}`}>
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} width="100%" />
          </div>
        </Link>
        <div className="card-bottom">
          <div className="card-info">
            <h3>{data.Title}</h3>
            <p>Category: {data.Type}</p>
            <p>Year: {data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
