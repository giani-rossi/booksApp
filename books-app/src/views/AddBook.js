import React from 'react';
import { Buttonback } from '../components/Buttonback';
import Mybooks from '../components/Mybooks';
import '../stories/profile.css'
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import { AddBook } from '../stories/Mybooks.stories';
import { Link } from 'react-router-dom';



const AddBooks = (props) => {

    
    return (
        <>
            <Navbar image="https://rickandmortyapi.com/api/character/avatar/17.jpeg" />
            <Link to="/FirstSignUp">  <Buttonback title="Volver al inicio" /> </Link>
            <div className="name-profile"> Agregar libros </div>
            <Search/>
            <AddBook children='Agregar Libro'/>
        </>
    )
}

export default AddBooks
