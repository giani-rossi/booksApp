import React, { useState } from "react";
import HeaderLog from "./HeaderLog";
import SignBox from "../components/SignBox.jsx";
import FooterLog from "./FooterLog";

const Login = () => {
  return (
    <>
      <HeaderLog />
      <SignBox
        children2="Para arrancar create una cuenta. Ya tenés cuenta?"
        children3="Logueate"
      >
        Bienvenidx!
      </SignBox>
      <FooterLog/>
    </>
  );
};

export default Login;
