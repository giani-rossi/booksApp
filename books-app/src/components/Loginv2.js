import React, { useState } from "react";
import HeaderLog from "../stories/HeaderLog";
import SignBox from "../stories/SignBox.jsx";
import FooterLog from "../stories/FooterLog";

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
