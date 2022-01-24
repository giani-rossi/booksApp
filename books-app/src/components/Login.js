import React, { useState } from 'react';
import {Button} from 'react-bootstrap'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import '../App.css'
import FirstSignUp from './FirstSignUp';


const Login = () => {
    
  
    const onLoginSucces = (response) => {
        console.log(response);
        console.log(response.profileObj.imageUrl)
        setLoginData(response)
       
    }
   

    const onLoginFailure = (response) => {
        console.log(response);
        setLoginData(response)
    }

    const responseFacebook = (response) => {
        console.log(response);
      }
       
     const componentClicked = (response) => {
         console.log(response);
     }

    const [loginData, setLoginData] = useState({})
      console.log(loginData);


    return (
        <>
    
    <h1 style={{fontSize:25 , marginTop:24}} > Libris</h1>

    <div className='card-login'>
        <div>
            <h3 style={{fontWeight:700 , fontSize:16}}>Bienvenidx!</h3 >
                 <p style={{fontSize:14}}>Para arrancar create una cuenta. <br/> Ya tenés cuenta? <a style={{color:'black'}} href='/'> Logueate. </a></p>

    <GoogleLogin
    clientId="618219396264-3i9dane48u46fu05pp5ei4cll25cqpnq.apps.googleusercontent.com"
    render={renderProps => (
        <Button className='button-login'  variant="dark" onClick={renderProps.onClick} disabled={renderProps.disabled}>Continuar con Google</Button>
      )}
    buttonText="Continuar con Google"
    onSuccess={onLoginSucces}
    onFailure={onLoginFailure}
    cookiePolicy={'single_host_origin'}
/>
   
    <FacebookLogin
    appId="604642740603267"
    autoLoad={false}
    cssClass="my-facebook-button-class button-login"
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} 
    render={renderProps => (
        <Button className='button-login' variant="dark" onClick={renderProps.onClick}  >Continuar con Facebook</Button>
      )}
    />
    </div>
    </div>

<div>
<p className='footer-login'>¿Qué es esto? Una app para ver qué libros tienen tus amigues y pedírselos prestados.
<br/><br/> Si tenés más preguntas <a style={{color:'black'}} href='/'> mandame un email. </a> </p>
</div>
      
        </>
    )
}

export default Login

