import React from "react";
import { Button } from "../stories/Button";
import  "../stories/welcomebox.css";

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
          <Button className="button-primary-default button-add-books">
            Agregar Libros
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBox;
