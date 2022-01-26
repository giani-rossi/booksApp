import React from "react";
import "./Collection.css";

const Collection = (props) => {
  const FAKE_DB_BOOKS = [
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

  const { name, qtybooks, children, ...rest } = props;
  return (
    <>
    <div className="collection">
      <div className="collection-profile">
        <img
          className="collection-profile-image"
          src="https://rickandmortyapi.com/api/character/avatar/17.jpeg"
          alt="profile"
        />
        <div className="collection-profile-text">
          {" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            {name}
          </span>
          tiene {qtybooks} libros:
        </div>
      </div>
      <div className="collection-books">
        {FAKE_DB_BOOKS.map((item) => (
          <div className="collection-card" key={item.id}>
            <img className="image-book" src={item.image} alt="img" />
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Collection;
