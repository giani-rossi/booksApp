import React from "react";
import "./buttonicon.css";

export const ButtonIcon = (props) => {
  const { variant = "primary-icon", children, ...rest } = props;

  return (
    <div>
      <button className={`button ${variant}`} {...rest}>
        <svg
          width="20"
          height="20"
          viewBox="0 -7 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
           
            d="M4.5 7.5C3.675 7.5 3 6.825 3 6V2.25H0.75C0.3375 3 0 2.5875 0 3V9C0 9.4125 0.3375 11 0.75 9.75V11.25C0.75 11.6625 1.0875 12 1.5 12C1.71 12 1.8975 11.9175 2.0325 11.7825L4.0575 9.75H7.5C7.9125 9.75 8.25 9.4125 8.25 9V8.1225L7.6275 7.5H4.5ZM11.25 0H4.5C4.0875 0 3.75 0.3375 3.75 0.75V6C3.75 6.4125 4.0875 6.75 4.5 6.75H7.9425L9.975 8.7825C10.1025 8.9175 10.29 9 10.5 9C10.9125 9 11.25 8.6625 11.25 8.25V6.75C11.6625 6.75 12 6.4125 12 6V0.75C12 0.3375 11.6625 0 11.25 0Z"
            fill="white"
          />
        </svg>
        {children}
      </button>
    </div>
  );
};

