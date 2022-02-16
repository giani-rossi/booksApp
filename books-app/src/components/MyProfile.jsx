import React from "react";

import '../stories/profile.css'
import { Button } from "../components/Button.jsx";
import { Link } from "react-router-dom";


export const Profile = (props) => {
  const { name, qtybooks, lendings, children, image, ...rest } = props;
 

  return (
    <>
      <div className="name-profile"> {name} </div>
       <div className='profile'>
        <img
            className="image-profile"
            src={image}
            alt="profile"
        />
      <div className="info-profile">
        <div>{qtybooks} libros</div>
        <div>{lendings} préstamos</div>
      </div>
      <Link to="/AddBook">   <Button variant='button-primary-default-myprofile'>Agregar libros</Button> </Link>
      </div>
    </>
  );
};
    
