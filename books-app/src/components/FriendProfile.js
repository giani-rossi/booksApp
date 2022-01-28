import React from "react";
import { Buttonback } from "../stories/Buttonback";
import Navbar from "../stories/Navbar";
import { Profile } from "../stories/Profile.jsx";
import Divisor from "../stories/Divisor";
import Mybooks from "../stories/Mybooks.jsx";

const FriendProfile = () => {
  return (
    <div>
      <Navbar image="https://rickandmortyapi.com/api/character/avatar/17.jpeg" />
      <Buttonback title="Volver al inicio" />
      <Profile
        image="https://rickandmortyapi.com/api/character/avatar/17.jpeg"
        lendings="3"
        name="Karen Serfaty"
        qtybooks="15"
      />
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
