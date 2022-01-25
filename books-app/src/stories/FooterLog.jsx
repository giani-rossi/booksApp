import React from "react";

import "./footerlog.css";

const FooterLog = (props) => {
  const { children, ...rest } = props;
console.log(rest);
  return (
    <>
      <p className="footer-login">
        ¿Qué es esto? Una app para ver qué libros tienen tus amigues y
        pedírselos prestados.
      </p>

      <p className="footer-login">
        Si tenés más preguntas{" "}
        <a style={{ color: "#00000099" }} href="/">
          {" "}
          mandame un email.{" "}
        </a>{" "}
      </p>

      {children}
    </>
  );
};

export default FooterLog;
