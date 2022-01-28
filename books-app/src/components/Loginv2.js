import React, { useState } from "react";
import HeaderLog from "./HeaderLog";
import SignBox from "./SignBox.jsx";
import FooterLog from "./FooterLog";

const Loginv2 = () => {
  return (
    <>
      <HeaderLog />
      <SignBox
  children2="Logueate para arrancar. No tenés cuenta?"
  children3="Crea una cuenta"
>
  Bienvenidx de vuelta!
</SignBox>
      <FooterLog/>
    </>
  );
};

export default Loginv2;
