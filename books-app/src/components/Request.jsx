import React from "react";
import { Button } from "../components/Button";
import Line from "./Line";
import "../stories/Request.css";
import State from "../components/State";
import { Spinner } from "react-bootstrap";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const FAKE_DB_BOOKS = [
  {
    id: 1,
    author: "Debby Applegate",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    title: "Madam: The Biography of Polly Adler, Icon of the Jazz Age",
    state: "LEND_ACCEPTED",
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
    state: "LEND_ACCEPTED",
    name: "Karen Serfaty",
  },
  {
    id: 5,
    author: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    title: "Madam: The Biography of Polly Adler, Icon of the Jazz Age",
    state: "LEND_ACCEPTED",

    name: "Karen Serfaty",
  },
];

const ALL_DATA = gql`
  query GetUserById {
    getUsers {
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
const Request = (props) => {
  const {
    variant2 = "no-button-lendOK ",
    children,
    imageProfile,
    imageBook,
    name,
    bookTitle,
    author,
    state = "stateLend",
    ...rest
  } = props;
  const { data, loading, error } = useQuery(ALL_DATA);
  return (
    <>
      <div className="request">
        <div className="images-request">
          <img
            className="image-profile-request"
            src={imageProfile}
            alt="profile"
          />

          <img className="image-book-request" src={imageBook} alt="profile" />
        </div>
        <div className="text-book-request">
          <div className="text-book-request-name">
            <Link to="/FriendProfile">
              {" "}
              <span style={{ textDecoration: "none" }}>{name}</span>{" "}
            </Link>{" "}
            te pidio este libro
          </div>
          <div className="text-book-request-bookTitle">
            {bookTitle} Autorx: {author}
          </div>
        </div>
      </div>

      <div className={`buttons-request ${variant2}`}>
        <Button
          variant="button-primary-default-request"
          children="Prestar"
        ></Button>
        <Button
          variant="button-secondary-default-request"
          children="No prestar"
        ></Button>
      </div>

      {error && console.log(error)}
      {loading && <Spinner animation="grow" variant="info" />}
      {!loading && (
        <div>
          {data.getUsers.map((item, index) =>
            item.books.map((element) => (
              <div key={item.id}>
                <div className={`${state}`}>
                  {item.state === "LEND_ACCEPTED" && (
                    <State icon="greenIcon" icon2="icon2-none" variant="green">
                      Prestado a {item.name}{" "}
                      <p style={{ color: "black" }}>
                        {" "}
                        🎉Acordate de entregarle este libro a {item.name}{" "}
                      </p>
                    </State>
                  )}

                  {item.state === "LEND_FINISHED" && (
                    <State icon="icon-none" icon2="icon2-none" variant="black">
                      No está prestado
                    </State>
                  )}

                  {item.state === "LEND_PENDING" && (
                    <State icon="icon-none" icon2="yellowIcon" variant="yellow">
                      Pedido pendiente
                    </State>
                  )}

                  {item.state === "LEND_REJECTED" && (
                    <State icon="icon-none" icon2="yellowIcon" variant="yellow">
                      Pedido pendiente
                    </State>
                  )}
                </div>
                <div>
                  <Line />
                </div>
              </div>
            ))
          )}
        </div>
      )}

      <Line />
    </>
  );
};

export default Request;
