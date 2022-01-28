import React from "react";
import { Button } from "./Button";

import Line from "./Line";
import "./Mybooks.css";

const Mybooks = (props) => {
  const FAKE_DB_BOOKS = [
    {
      id: 1,
      name: "Debby Applegate",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      title: "Madam: The Biography of Polly Adler, Icon of the Jazz Age",
    },
    {
      id: 2,
      name: "Debby Applegate",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      title: "Madam: The Biography of Polly Adler, Icon of the Jazz Age",
    },
    {
      id: 3,
      name: "Debby Applegate",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      title: "Madam: The Biography of Polly Adler, Icon of the Jazz Age",
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

  const { children, ...rest } = props;

  return (
    <>
      <div className="mybook">
        <div className="mybook-books">
          {FAKE_DB_BOOKS.map((item) => (
            <div className="mybook-card" key={item.id}>
              <img className="mybook-image" src={item.image} alt="img" />
              <div className="mybook-info">
                <div className="mybook-title">{item.title}</div>
                <div className="mybook-name">by {item.name}</div>

                <div>
                  <Button variant="button-primary-default">
                    Pedir Prestado
                  </Button>
                  <Line />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mybooks;
