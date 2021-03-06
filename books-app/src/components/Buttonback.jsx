import React from "react";
import "../stories/Buttonback.css";

export const Buttonback = (props) => {
  const { title, children, ...rest } = props;

  return (
    <div>
      <button className="button-back">
        <svg
          style={{ marginRight: 5, marginBottom: 1, verticalAlign: "inherit" }}
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.24316 8.99625L1.12248 5.12068L4.99805 1"
            stroke="#666666"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        {title}
      </button>
    </div>
  );
};
