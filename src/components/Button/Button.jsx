import React from "react";
import "./Button.scss";

const Button = ({isPlus, onClick}) => {
  let buttonClass = "";

  if(isPlus === true) {
    buttonClass="fas fa-plus";
  } else {
    buttonClass="fas fa-minus";
  }

  return (
    <button className="tickets__button" onClick={onClick}><i className={buttonClass}></i></button>
  )
}

export default Button;