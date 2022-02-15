import React from "react";
import { Button } from "../components/Button";

import Line from "./Line";
import "../stories/Mybooks.css";
import State from "../components/State";
import { gql, useQuery } from "@apollo/client";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Mybooks = (props) => {
  const USER_BOOKS = gql`
    query Query {
      getUser {
        id
        name
        email
        books {
          id
          title
          author
          ISBN
        }
      }
    }
  `;

  /*
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
*/
  const {
    variant = "mybook-image",
    variant2 = " button-primary-default ",
    variant3 = "",
    variant4 = "mybook-card",
    state = "stateList",
    children = 'Pedir prestado',
    ...rest
  } = props;

  const { data, loading, error } = useQuery(USER_BOOKS);

  error && <p>There is an error</p>;

  return (
    <>
      {loading && <Spinner animation="grow" variant="info" />}
      {!loading && (
        <div className="mybook">
          <div className="mybook-books">
            {data.getUser.books.map((item, index) => (
              <div className={`mybook-card ${variant4}`} key={index}>
                <img
                  className={`mybook-image ${variant}`}
                  src="https://rickandmortyapi.com/api/character/avatar/12.jpeg"
                  alt="img"
                />
                <div className="mybook-info">
                  <div className="mybook-title">{item.title}</div>
                  <div className={`mybook-author ${variant3}`}>
                    by {item.author}
                  </div>
                  <div className={`${state}`}>
                    {item.state === " LEND_ACCEPTED" && (
                      <State
                        icon="greenIcon"
                        icon2="icon2-none"
                        variant="green"
                      >
                        Prestado a {item.name}{" "}
                      </State>
                    )}

                    {item.state === "LEND_REJECTED" && (
                      <State
                        icon="icon-none"
                        icon2="icon2-none"
                        variant="black"
                      >
                        No está prestado
                      </State>
                    )}

                    {item.state === " LEND_PENDING" && (
                      <State
                        icon="icon-none"
                        icon2="yellowIcon"
                        variant="yellow"
                      >
                        Pedido pendiente
                      </State>
                    )}
                  </div>
                  <div>
                    <Button
                      variant="button-primary-default"
                      className={`${variant2}`}
                    >
                      {children}
                    </Button>
                    <Line />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Mybooks;
