import React from "react";
import WelcomeBox from "../stories/WelcomeBox";
import Navbar from "../stories/Navbar";
import Divisor from "../stories/Divisor";
import CollectionCopy from "./CollectionCopy";
import { useQuery, gql } from "@apollo/client";
import { Spinner } from "react-bootstrap";
import Collection from "../stories/Collection";

const USER_INFO = gql`
  query UserInfo {
    getUser {
      id
      name
      email
    }
  }
`;

const FirstSignUp = () => {
  const { data, loading, error } = useQuery(USER_INFO);

  return (
    <>
      <Navbar image="https://rickandmortyapi.com/api/character/avatar/17.jpeg" />

      {loading ? (
        <Spinner animation="grow" variant="info" />
      ) : (
        <WelcomeBox name={data.getUser.name} />
      )}
      {error && <p>There is an error</p>}
      <Divisor
        text="Amigues y sus libros: "
        variant="divisor-text-amigues"
        variant2="divisor-copy"
      />

    <CollectionCopy />
    </>
  );
};

export default FirstSignUp;
