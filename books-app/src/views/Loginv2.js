import React, { useState } from "react";
import HeaderLog from "../components/HeaderLog";
import SignBox from "../components/SignBox.jsx";
import FooterLog from "../components/FooterLog";
import { Signin, Signup } from "../stories/SignBox.stories";

const Loginv2 = () => {
  return (
    <>
      <HeaderLog />
      <SignBox
        children="Bienvenidx de vuelta!"
        children2="Logueate para arrancar. No tenés cuenta?"
        children3=""
        children4="Crea una cuenta"
      >
      
      </SignBox>
      <FooterLog />
    </>
  );
};

export default Loginv2;

