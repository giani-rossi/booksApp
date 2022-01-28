import React from "react";
import WelcomeBox from "../stories/WelcomeBox";
import Navbar from "../stories/Navbar";
import Divisor from "../stories/Divisor";
import CollectionCopy from "./CollectionCopy";

const FirstSignUp = () => {
  return (
    <>
      <Navbar image="https://rickandmortyapi.com/api/character/avatar/17.jpeg" />
      <WelcomeBox name="Karen" />
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
