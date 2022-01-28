import React from 'react';
import { Buttonback } from './Buttonback';
import Navbar from './Navbar';


const Profile = () => {
    return (
        <div>
            <Navbar image="https://rickandmortyapi.com/api/character/avatar/17.jpeg"/>
            <Buttonback title="Volver al inicio" />
        </div>
    )
}

export default Profile
