import React from "react";
import { Button } from "./Button";

import Line from "./Line";
import "./Mybooks.css";
import State from "./State";

const Mybooks = (props) => {
  const FAKE_DB_BOOKS = [
    {
      id: 1,
      author: "Debby Applegate",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      title: "Madam: The Biography of Polly Adler, Icon of the Jazz Age",
      state: "Prestado",
      name: "Karen Serfaty",
    },
    {
      id: 2,
      author: "Debby Applegate",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      title: "Madam: The Biography of Polly Adler, Icon of the Jazz Age",
      state: "NoPrestado",
      name: "Karen Serfaty",
    },
    {
      id: 3,
      author: "Debby Applegate",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      title: "Madam: The Biography of Polly Adler, Icon of the Jazz Age",
      state: "Pendiente",
      name: "Karen Serfaty",
    },
    {
      id: 4,
      author: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      title: "Madam: The Biography of Polly Adler, Icon of the Jazz Age",
      state: "Prestado",
      name: "Karen Serfaty",
    },
    {
      id: 5,
      author: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      title: "Madam: The Biography of Polly Adler, Icon of the Jazz Age",
      state: "Pendiente",

      name: "Karen Serfaty",
    },
  ];

  const {
    variant = "mybook-image",
    variant2 = " button-primary-default ",
    variant3 = "",
    variant4 = 'mybook-card',
    state = "stateList",
    ...rest
  } = props;

  return (
    <>
      <div className="mybook">
        <div className="mybook-books">
          {FAKE_DB_BOOKS.map((item) => (
            <div className={`mybook-card ${variant4}`} key={item.id}>
              <img
                className={`mybook-image ${variant}`}
                src={item.image}
                alt="img"
              />
              <div className="mybook-info">
                <div className="mybook-title">{item.title}</div>
                <div className={`mybook-author ${variant3}`}>
                  by {item.author}
                </div>
                <div className={`${state}`}>
                {item.state === "Prestado" ? (
                  <State icon="greenIcon" icon2="icon2-none" variant="green">
                    {" "}
                    Prestado a {item.name}{" "}
                  </State>
                ) : item.state === "NoPrestado" ? (
                  <State icon="icon-none" icon2="icon2-none" variant="black">
                    {" "}
                    No está prestado
                  </State>
                ) : (
                  <State icon="icon-none" icon2="yellowIcon" variant="yellow">
                    Pedido pendiente
                  </State>
                )}
                </div>
                <div>
                  <Button
                    variant="button-primary-default"
                    className={`${variant2}`}

                  >
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
