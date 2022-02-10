import React from 'react';
import { Buttonback } from '../components/Buttonback';
import Mybooks from '../components/Mybooks';
import '../stories/profile.css'
import Navbar from '../components/Navbar';
import Search from '../components/Search';



const AddBooks = (props) => {

    
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

export default AddBooks
