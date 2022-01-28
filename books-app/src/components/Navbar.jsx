import React from 'react';
import '../stories/Navbar.css'

const Navbar = (props) => {

    const {children , image , ...rest} = props

    return (
        <div className='navbar'>
            <p className='title-navbar'>Libris</p>
            <img
          className="navbar-profile-image"
          src={image}
          alt="profile"
        />
        </div>
    )
}

export default Navbar
