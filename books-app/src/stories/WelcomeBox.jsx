import React from "react";
import { Button } from "./Button";
import  "./welcomebox.css";

const WelcomeBox = (props) => {
  const { children, ...rest } = props;

  return (
    <div>
      <div className="card-add-books">
        <div>
          <h3 className="title-add-books">Holi {children} !</h3>
          <p className="text-add-books">
            Para arrancar sumá algunos libros que tengas.
          </p>
          <Button className="button-primary-default button-add-books">
            Agregar Libros
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBox;
