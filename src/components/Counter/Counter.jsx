import './Counter.scss';

import Button from "../Button/Button";

const Counter = () => {
  return (
  <div className="tickets__counter">
    <Button isPlus={false} />
    <h4 className="tickets__number">0</h4>
    <Button isPlus={true} />
  </div>)
}

export default Counter;