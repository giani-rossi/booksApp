import React from "react";
import { Button } from "./Button";
import Line from "./Line";
import "./Request.css";

const Request = (props) => {
  const {
    children,
    imageProfile,
    imageBook,
    name,
    bookTitle,
    author,
    ...rest
  } = props;

  return (
    <>
      <div className='request'>
        <div className="images-request">
          <img
            className="image-profile-request"
            src={imageProfile}
            alt="profile"
          />
          <img className="image-book-request" src={imageBook} alt="profile" />
        </div>
        <div className="text-book-request">
          <div className="text-book-request-name">
            <span style={{ textDecoration: "underline" }}>{name}</span> te pidio
            este libro
          </div>
          <div className="text-book-request-bookTitle">
            {bookTitle} {author}
          </div>
        </div>
      </div>
      <div className='buttons-request'>
  <Button variant="button-primary-default-request" children='Prestar'></Button>
  <Button variant="button-secondary-default-request" children='No prestar'></Button>
  </div>
  <Line/>
    </>
  );
};

export default Request;
