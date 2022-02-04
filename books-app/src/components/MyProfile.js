import React from "react";
import { Buttonback } from "../stories/Buttonback";
import Navbar from "../stories/Navbar";
import Request from "../stories/Request";
import Divisor from "../stories/Divisor";
import Mybooks from "../stories/Mybooks.jsx";
import { Profile } from "./MyProfile.jsx";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Spinner } from "react-bootstrap";

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

const MyProfile = () => {
  const { data, loading, error } = useQuery(ALL_DATA);
  const [
    lendingBook,
    { data: dataLend, loading: loadingLend, error: errorLend },
  ] = useMutation(LENDINGS);
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
      <Divisor
        text="Pedidos de préstamos:"
        variant="divisor-text-profile-lendings"
        variant2="divisor-copy-v3"
      />
      {loading ? (
        <Spinner animation="grow" variant="info" />
      ) : (
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
        )
      )}

      <Divisor
        text="Mis libros:"
        variant="divisor-text-profile-own"
        variant2="divisor-copy-v4"
      />
      <Mybooks
        state="showStateList"
        variant="mybook-image-list"
        variant2="nobutton-list"
        variant3="mybook-author-list"
        variant4="mybook-card-list"
      />
    </div>
  );
};

export default MyProfile;
