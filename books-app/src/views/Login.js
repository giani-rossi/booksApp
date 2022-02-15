import React, { useState } from "react";
import HeaderLog from "../components/HeaderLog";
import SignBox from "../components/SignBox.jsx";
import FooterLog from "../components/FooterLog";
import { Signin, Signup } from "../stories/SignBox.stories";




const Login = () => {


  return (
    <>
      <HeaderLog />
      <Signin
        children=" Bienvenidx de vuelta!"
        children2="Logueate para arrancar. No tenés cuenta?"
       children3="Crea una cuenta"
      ></Signin>
      <Signup
        children="Bienvenidx!"
        children2="Para arrancar create una cuenta. Ya tenés cuenta?"
        children3="Logueate"
      ></Signup>

      <FooterLog />
    </>
  );
};

export default Login;
