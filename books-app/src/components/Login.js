import React, { useState } from "react";
import HeaderLog from "../stories/HeaderLog";
import SignBox from "../stories/SignBox.jsx";
import FooterLog from "../stories/FooterLog";

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
