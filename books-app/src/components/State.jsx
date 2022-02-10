import React from "react";
import "../stories/State.css";

const State = (props) => {
  const { variant, children, icon, icon2, icon3, ...rest } = props;

  return (
    <>
      <div className={`${variant}`}>
        <svg
          className={`${icon}`}
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4L4 7L9 1"
            stroke="#30AF04"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          className={`${icon2}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
            stroke="#AFA804"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 8L6.293 6.793C6.10545 6.60551 6.00006 6.35119 6 6.086V3"
            stroke="#AFA804"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          className={`${icon3}`}
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.33341 0.666687L0.666748 7.33335M7.33341 7.33335L0.666748 0.666687L7.33341 7.33335Z"
            stroke="#B20C0C"
            stroke-linecap="round"
          />
        </svg>

        {children}
      </div>
    </>
  );
};

export default State;
