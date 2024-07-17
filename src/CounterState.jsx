import { useState } from "react";

function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  const incrementAsync = () => {
    setTimeout(() => setCount((prevValue) => prevValue + 10), 5000);
  };
  return (
    <section className="container">
      <h3>Counter con useState()</h3>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={incrementAsync}>ASYNC +10</button>
    </section>
  );
}
export default Counter;
