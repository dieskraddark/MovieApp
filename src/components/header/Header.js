import React from 'react'
import { Link } from 'react-router-dom';
import img from '../../images/user.png';
import '../header/header.scss';

export default function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <div className="logo">
                    <i class='bx bxs-movie-play' ></i> <span></span>
                     Movie App
                </div>
            </Link>
            <ul className="navbar">
                <li>  <Link to="/">Home  </Link></li>
                <li>  <Link to="/">Movies  </Link></li>
                <li>  <Link to="/">Comming  </Link></li>
                <li>  <Link to="/">Newsletter  </Link></li>

            </ul>
            <div className="user-image">
                <img src={img} alt="user" />
            </div>
        </div>
    )
}
