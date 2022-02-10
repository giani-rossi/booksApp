import React from "react";
import Mybooks from "../components/Mybooks";

export default {
  title: "Mybooks",
  component: Mybooks,
};

const Template = (args) => <Mybooks {...args} />;

export const MyBook = () => (
  <Mybooks stateList="stateList" children="Pedir Prestado" />
);

export const MyBookList = Template.bind({});
MyBookList.args = {
  variant: "mybook-image-list",
  variant2: "nobutton-list",
  variant3: "mybook-author-list",
  variant4: "mybook-card-list",
  state: "showStateList",
};

export const AddBook = Template.bind({});
AddBook.args = {
  state: "stateList",
  children: "",
};
