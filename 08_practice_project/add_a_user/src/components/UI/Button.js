import React from "react";
import buttonStyle from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${buttonStyle.button} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
