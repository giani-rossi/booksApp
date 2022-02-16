import React from 'react';
import { Link } from 'react-router-dom';
import '../stories/Navbar.css'

const Navbar = (props) => {

    const {children , image , ...rest} = props

    return (
        <div className='navbar'>
            <p className='title-navbar'>Libris</p>
            <Link to="/MyProfile">  <img
          className="navbar-profile-image"
          src={image}
          alt="profile"
        /> </Link>
        </div>
    )
}

export default Navbar
