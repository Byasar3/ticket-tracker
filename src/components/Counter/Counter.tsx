import { useState } from "react";
import "./counter.scss"

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
	if (count > 0) {
		setCount(count - 1);
	}
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <h2>{count}</h2>
      <button onClick={decrement} className="counter__button">-</button>
      <button onClick={increment} className="counter__button">+</button>
    </div>
  );
};

export default Counter;
