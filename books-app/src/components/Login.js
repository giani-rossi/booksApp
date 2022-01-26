import React, { useState } from "react";
import "../App.css";
import SignBox from "../stories/SignBox";
import HeaderLog from "../stories/HeaderLog";
import { Signin, Signup } from "../stories/SignBox.stories";
import Collection from "../stories/Collection";
import { Collections } from "../stories/Collection.stories";
const Login = () => {
  return (
    <>
      <HeaderLog />
      
      <Signin />
      <Collections/>
    </>
  );
};

export default Login;
