import React from "react";
import SignBox from "./SignBox";

export default {
  title: "SignupBox",
  component: SignBox,
  argTypes: {
    children: { control: "text" },
  },
};

const Template = (args) => <SignBox {...args} />;

export const Signup = Template.bind({});
Signup.args = {
  children: "Bienvenidx!",
  children2: "Para arrancar create una cuenta. Ya tenés cuenta?",
  children3: "Logueate",
};

export const Signin = Template.bind({});
Signin.args = {
  children: "Bienvenidx de vuelta!",
  children2: "Logueate para arrancar. No tenés cuenta?",
  children3: "Crea una cuenta",
};
