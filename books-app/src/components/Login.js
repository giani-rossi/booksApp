import React, { useState } from "react";
import HeaderLog from "../stories/HeaderLog";
import SignBox from "../stories/SignBox.jsx";
import FooterLog from "../stories/FooterLog";

const Login = () => {
  return (
    <>
      <HeaderLog />
      <SignBox
        children="Bienvenidx!"
        children2="Para arrancar create una cuenta. Ya tenés cuenta?"
        children3="Logueate"
      ></SignBox>

      <SignBox
        children=" Bienvenidx de vuelta!"
        children2="Logueate para arrancar. No tenés cuenta?"
        children3="Crea una cuenta"
      ></SignBox>
      <FooterLog />
    </>
  );
};

export default Login;
