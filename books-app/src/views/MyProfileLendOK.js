import React from "react";
import { Buttonback } from "../components/Buttonback";
import Navbar from "../components/Navbar";
import Request from "../components/Request";
import Divisor from "../components/Divisor";
import "../stories/Request.css";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Spinner } from "react-bootstrap";
import { Profile } from "../components/Profile";
import { Button } from "../components/Button";
import State from "../components/State";
import Line from "../components/Line";

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

const LENDINGS = gql`
  mutation AddBookToUser($bookLending: Float!) {
    askUserForLend {
      id
      user_id
      book_id
    }
  }
`;

const MyProfileLendOK = (props) => {
  const { variant, state = "stateLend", ...rest } = props;
  const { data, loading, error } = useQuery(ALL_DATA);

  return (
    <div>
      <Navbar image="https://rickandmortyapi.com/api/character/avatar/17.jpeg" />
      <Buttonback title="Volver al inicio" />

      <Profile
        image="https://rickandmortyapi.com/api/character/avatar/17.jpeg"
        lendings="3"
        name="Tu perfil"
        qtybooks="15"
      />
      <Button
        style={{ position: "absolute", right: " 24px", top: "125px" }}
        variant="button-primary-default-myprofile"
      >
        Agregar libros
      </Button>
      <Divisor
        text="Pedidos de préstamos:"
        variant="divisor-text-profile-lendings"
        variant2="divisor-copy-v3"
      />
      {error && console.log(error)}
      {loading && <Spinner animation="grow" variant="info" />}
      {!loading &&
        data.getUsers.map((item, index) =>
          item.books.map((element) => (
            <Request
              key={index}
              author={element.author}
              bookTitle={element.title}
              imageBook="https://rickandmortyapi.com/api/character/avatar/17.jpeg"
              //{item.imageBook}
              imageProfile="https://rickandmortyapi.com/api/character/avatar/12.jpeg"
              //{item.imageProfile}
              name={item.name}
            />
          ))
        )}
    </div>
  );
};

export default MyProfileLendOK;
