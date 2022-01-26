import React from 'react';
import './Navbar.css'

const Navbar = (props) => {

    const {children , ...rest} = props

    return (
        <div className='navbar'>
            <p className='title-navbar'>Libris</p>
            <img
          className="navbar-profile-image"
          src="https://rickandmortyapi.com/api/character/avatar/17.jpeg"
          alt="profile"
        />
        </div>
    )
}

export default Navbar
