import React from "react";
import "./Button.scss";

const Button = ({isPlus, onClick}) => {
  if(isPlus === true) {
    return <button className="tickets__button" onClick={onClick}><i className="fas fa-plus"></i></button>
  } else {
    return <button className="tickets__button" onClick={onClick}><i className="fas fa-minus"></i></button>
  }
}

export default Button;