import React from "react";
import CollectionCopy from "./CollectionCopy";
import Divisor from "./Divisor";
import Navbar from "./Navbar";

const FriendsBooks = () => {
  return (
    <div>
      <Navbar image="https://rickandmortyapi.com/api/character/avatar/17.jpeg" />
      <Divisor
        text="Amigues y sus libros: "
        variant="divisor-text-amigues"
        variant2="divisor-copy-v2"
      />
      <CollectionCopy />
    </div>
  );
};

export default FriendsBooks;
