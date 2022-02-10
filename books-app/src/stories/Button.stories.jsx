import React from "react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => <Button {...args} />;

/*export const PrimaryDefault = () => (
  <Button variant="button-primary-default">Agregar libros</Button>
);
*/
export const PrimaryDefault = Template.bind({})
PrimaryDefault.args = {
  variant:"button-primary-default",
  children:'Agregar libros'
}

export const SecondaryDefault = () => (
  <Button variant="button-secondary-default">No prestar</Button>
);
export const MinimalDefault = () => (
  <Button variant="button-minimal-default">Prestado a Karen Serfaty</Button>
);

export const PrimaryDefaultv2 = Template.bind({});
PrimaryDefaultv2.args = {
  variant: "button-primary-default-myprofile",
  children:'Agregar libros'
};

export const PrimaryDefaultRequest = Template.bind({});
PrimaryDefaultRequest.args = {
  variant: "button-primary-default-request",
};

export const SecondaryDefaultRequest = Template.bind({});
SecondaryDefaultRequest.args = {
  variant: "button-secondary-default-request",
};