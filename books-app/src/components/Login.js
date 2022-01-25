import React, { useState } from "react";
import "../App.css";
import SignBox from "../stories/SignBox";
import HeaderLog from "../stories/HeaderLog";
import { Signin, Signup } from "../stories/SignBox.stories";
const Login = () => {
  return (
    <>
      <HeaderLog />
      
      <Signin />
    </>
  );
};

export default Login;
