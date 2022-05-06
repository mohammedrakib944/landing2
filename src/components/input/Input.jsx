import React from "react";
import "./input.css";


const Input = (props) => {
  const { type, placeholder, label } = props;
  return (
    <div className="inputs">
      <label>{label}</label>
      <input className="input" type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
