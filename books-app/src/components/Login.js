import React, { useState } from "react";
import "../App.css";
import SignBox from "../stories/SignBox";
import HeaderLog from "../stories/HeaderLog";
import { Signin, Signup } from "../stories/SignBox.stories";
import Collection from "../stories/Collection";
import Divisor from "../stories/Divisor";
import Navbar from "../stories/Navbar";
import { NavbarProfile } from "../stories/Navbar.stories";

const Login = () => {
  return (
    <>
   
      <NavbarProfile/>
      <Divisor />
      
     
    
    </>
  );
};

export default Login;
