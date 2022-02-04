import React from "react";
import { Buttonback } from "../stories/Buttonback";
import Navbar from "../stories/Navbar";
import { Profile } from "../stories/Profile.jsx";
import Divisor from "../stories/Divisor";
import Mybooks from "../stories/Mybooks.jsx";
import { useQuery, gql } from "@apollo/client";
import { Spinner } from "react-bootstrap";

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

const FriendProfile = () => {
  const { data, loading, error } = useQuery(USER_BOOKS);
error && <p>'There is an error'</p>
  return (
    <div>
      <Navbar image="https://rickandmortyapi.com/api/character/avatar/17.jpeg" />
      <Buttonback title="Volver al inicio" />

      {loading ? (
        <Spinner animation="grow" variant="info" />
      ) : (
        <Profile
          image="https://rickandmortyapi.com/api/character/avatar/17.jpeg"
          lendings="3"
          name={data.getUser.name}
          qtybooks="15"
        />
      )}
      <Divisor
        text="Sus libros:"
        variant="divisor-text-profile-amigue"
        variant2="divisor-copy-v3"
      />

      <Mybooks />
    </div>
  );
};

export default FriendProfile;
