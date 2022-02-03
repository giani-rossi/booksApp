import React from 'react';
import { Buttonback } from '../stories/Buttonback';
import Mybooks from '../stories/Mybooks';
import Navbar from '../stories/Navbar';
import Search from '../stories/Search';



const AddBook = (props) => {

    
    return (
        <>
            <Navbar image="https://rickandmortyapi.com/api/character/avatar/17.jpeg" />
            <Buttonback title="Volver al inicio" />
            <div className="name-profile"> Agregar libros </div>
            <Search/>
            <Mybooks/>
        </>
    )
}

export default AddBook
