import React from "react";

import "./footerlog.css";

const FooterLog = (props) => {
  const { children, ...rest } = props;
console.log(rest);
  return (
    <>
     <div className="footer-login">
          ¿Qué es esto? Una app para ver qué libros tienen tus amigues y
          pedírselos prestados.
          <br />
          <br />
          Si tenés más preguntas{" "}
          <a style={{ color: "#00000099" }} href="/">
            {" "}
            mandame un email.{" "}
          </a>{" "}
        </div>
      {children}
    </>
  );
};

export default FooterLog;
