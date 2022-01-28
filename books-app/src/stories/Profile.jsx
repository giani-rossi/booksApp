import React from "react";
import './profile.css'

export const Profile = (props) => {
  const { name, qtybooks, lendings, children, image, ...rest } = props;

  const FAKE_DB_USER = [
    {
      id: 1,
      name: "Karen Serfaty",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      email: "kserfaty@gmail.com",
    },
    {
      id: 2,
      name: "Karen Serfaty",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      email: "kserfaty@gmail.com",
    },
    {
      id: 3,
      name: "Karen Serfaty",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      email: "kserfaty@gmail.com",
    },
    {
      id: 4,
      name: "Karen Serfaty",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      email: "kserfaty@gmail.com",
    },
    {
      id: 5,
      name: "Karen Serfaty",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      email: "kserfaty@gmail.com",
    },
  ];


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
      </div>
    </>
  );
};
    
