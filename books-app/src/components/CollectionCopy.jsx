import React from "react";
import '../stories/Collection.css'
import Collection from '../stories/Collection'




const CollectionCopy = (props) => {
  const FAKE_DB_BOOKS = [
    {
      id: 1,
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      title: "Book Title",
    },
    {
      id: 2,
      name: "Gianina Rossi",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      title: "Book Title",
    },
    {
      id: 3,
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
      title: "Book Title",
    },
    {
      id: 4,
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
      title: "Book Title",
    },
    {
      id: 5,
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
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

  const { name, qtybooks, image , children, ...rest } = props;
  return (
    <>
   <div className='collection-books-copy'>
        {FAKE_DB_BOOKS.map((item , index) => (
          <Collection
          image={item.image}
          name={item.name}
          qtybooks={item.id}
        />
         
        ))}
       </div>
    </>
  );
};

export default CollectionCopy;
