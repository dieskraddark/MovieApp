import React from 'react'
import { Link } from 'react-router-dom';
import img from '../../images/user.png';
import '../header/header.scss';

export default function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <div className="logo">
                    Movie App
                </div>
            </Link>
            <div className="user-image">
                <img src={img} alt="user" />
            </div> 
        </div>
    )
}
