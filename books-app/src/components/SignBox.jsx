import React, { useState } from "react";
import { Button } from "../stories/Button";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router-dom";
import '../stories/signbox.css'

const SignBox = (props) => {
  const { children, children2, children3, ...rest } = props;

  const onLoginSucces = (response) => {
    console.log(response);
    console.log(response.profileObj.imageUrl);
    setLoginData(response);
   
  };

  const onLoginFailure = (response) => {
    console.log(response);
    setLoginData(response);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const componentClicked = (response) => {
    console.log(response);
  };

  const [loginData, setLoginData] = useState({});
  console.log(loginData);

  
  return (
    <>
      <div className="card-login">
        <div>
          <h3>{children}</h3>
          <p className="text-login">
           
            {children2}
            
            <a style={{ color: "black" }} href="/">
            <br/>
              {children3}
            </a>
          </p>

          <GoogleLogin
            clientId="618219396264-3i9dane48u46fu05pp5ei4cll25cqpnq.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className="button-login button-primary-default"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Continuar con Google
              </Button>
            )}
            onSuccess={onLoginSucces}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
          />

          <FacebookLogin
            appId="604642740603267"
            autoLoad={false}
            cssClass="button-login button-primary-default "
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
            render={(renderProps) => (
              <Button
                className="button-login button-primary-default"
                onClick={renderProps.onClick}
              >
                Continuar con Facebook
              </Button>
            )}
          />
        </div>
      </div>
      
    </>
  );
};

export default SignBox;
