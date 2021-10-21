import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count - 1);

  return (
    <div className="counter-container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={onDecrement}>
          -
        </button>
        <button type="button" onClick={onIncrement}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
