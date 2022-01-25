import React from "react";
import "./Collection.css";

const Collection = (props) => {
  const FAKE_DB = [
    {
      id: 1,
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      title: "Book Title",
      
    },
    {
      id: 2,
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      title: "Book Title",
    },
    {
      id: 3,
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      title: "Book Title",
    },
    {
      id: 4,
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      title: "Book Title",
    },
    {
      id: 5,
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      title: "Book Title",
    },
  ];
  const { name, qtybooks, children, ...rest } = props;
  return (
    <>
    
      <div className="collection-books">
        {FAKE_DB.map((item) => (
          <div className="collection-card" key={item.id}>
            <img className="image-book" src={item.image} alt="img" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Collection;
