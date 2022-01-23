import React from 'react';
import {Button} from 'react-bootstrap'
import '../App.css'

const Login = () => {
    
    
    return (
        <>
        <h1 style={{fontSize:25 , marginTop:24}} > Libris</h1>
        
<div className='card-login'>
  <div>
    <h3 style={{fontWeight:700 , fontSize:16}}>Bienvenidx!</h3 >
    <p style={{fontSize:14}}>
    Para arrancar create una cuenta. <br/> Ya tenés cuenta? <a style={{color:'black'}} href='/'> Logueate. </a>
    </p>
    <Button className='button-login'  variant="dark" >Continuar con Google</Button>
    <Button className='button-login' variant="dark" >Continuar con Facebook</Button>
   
  </div>
</div>


<p className='footer-login'>¿Qué es esto? Una app para ver qué libros tienen tus amigues y pedírselos prestados.
<br/><br/>
Si tenés más preguntas <a style={{color:'black'}} href='/'> mandame un email. </a> </p>


        </>
    )
}

export default Login

