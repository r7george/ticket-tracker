import './Counter.scss';
import React, {useState} from "react";

import Button from "../Button/Button";

const Counter = () => {
  const [counter, setCounter] = useState(() => {
    return 0;
  });

  const handleIncrement = () => {
    setCounter(prevCount => prevCount + 1);
  }

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(prevCount => prevCount - 1);
    }
  }

  return (
  <div className="tickets__counter">
    <Button isPlus={false} onClick={handleDecrement} />
    <h4 className="tickets__number">{counter}</h4>
    <Button isPlus={true} onClick={handleIncrement} />
  </div>)
}

export default Counter;