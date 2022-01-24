import React from 'react';
import {Button} from 'react-bootstrap'
import '../App.css'

const FirstSignUp = ({data}) => {
    console.log(data);
    
    return (
        <>
        <h2 style={{fontSize:18 , marginTop:24}} > Libris</h2>
        
<div className='card-add-books'>
  <div>
    <h3 className='title-add-books'>Holi!</h3 >
    <p className='text-add-books'>
    Para arrancar sumá algunos libros que tengas.
    </p>
    <Button className='button-add-books'  variant="dark" >Agregar Libros</Button>
  
   
  </div>
</div>


<p className='footer-login'>¿Qué es esto? Una app para ver qué libros tienen tus amigues y pedírselos prestados.
<br/><br/>
Si tenés más preguntas <a style={{color:'black'}} href='/'> mandame un email. </a> </p>


        </>
    )
}

export default FirstSignUp