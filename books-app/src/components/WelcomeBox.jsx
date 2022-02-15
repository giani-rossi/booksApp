import React from "react";
import { Button } from "./Button";
import  "../stories/welcomebox.css";
import { Link } from "react-router-dom";

const WelcomeBox = (props) => {
  const { name, children, ...rest } = props;

  return (
    <div>
      <div className="card-add-books">
        <div>
          <h3 className="title-add-books">Holi {name} !</h3>
          <p className="text-add-books">
            Para arrancar sumá algunos libros que tengas.
          </p>
          <Link to="/AddBook"> <Button className="button-primary-default button-add-books">
            Agregar Libros
          </Button> </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBox;
