import React from "react";
import "./Button.scss";

const Button = (props) => {
  const isPlus = props.isPlus;

  if(isPlus === true) {
    return <button className="tickets__button"><i className="fas fa-plus"></i></button>
  } else {
    return <button className="tickets__button"><i className="fas fa-minus"></i></button>
  }
}

export default Button;