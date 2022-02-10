import React from "react";
import WelcomeBox from "../components/WelcomeBox";
import Navbar from "../components/Navbar";
import Divisor from "../components/Divisor";
import CollectionCopy from "../components/CollectionCopy";
import { useQuery, gql } from "@apollo/client";
import { Spinner } from "react-bootstrap";


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
