import React from "react";
import { Buttonback } from "../stories/Buttonback";
import Navbar from "../stories/Navbar";
import Request from "../stories/Request";
import Divisor from "../stories/Divisor";
import Mybooks from "../stories/Mybooks.jsx";
import { Profile } from "./MyProfile.jsx";

const MyProfile = () => {
  const FAKE_DB_USER = [
    {
      id: 1,
      author: "Autorx: Debby Applegate.",
      bookTitle: "Madam: The Biography of Polly Adler, Icon of the Jazz Age.",
      imageBook: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      imageProfile: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
      name: "Karen",
    },
    {
      id: 2,
      author: "Autorx: Debby Applegate.",
      bookTitle: "Madam: The Biography of Polly Adler, Icon of the Jazz Age.",
      imageBook: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      imageProfile: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
      name: "Gianina",
    },
    {
      id: 3,
      author: "Autorx: Debby Applegate.",
      bookTitle: "Madam: The Biography of Polly Adler, Icon of the Jazz Age.",
      imageBook: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      imageProfile: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
      name: "Catalina",
    },
  ];

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

      {FAKE_DB_USER.map((item) => (
        <Request
          author={item.author}
          bookTitle={item.bookTitle}
          imageBook={item.imageBook}
          imageProfile={item.imageProfile}
          name={item.name}
        />
      ))}
      <Divisor
  text="Mis libros:"
  variant="divisor-text-profile-own"
  variant2='divisor-copy-v4'
/>
<Mybooks
  state="showStateList"
  variant="mybook-image-list"
  variant2="nobutton-list"
  variant3="mybook-author-list"
  variant4='mybook-card-list'
/>
    </div>
  );
};

export default MyProfile;
