import { useReducer, useState } from "react";
import { ACTIONS } from "./reducers/CountActions";
import { ReducerCount, init } from "./reducers/CountReducer";
function CounterReducer({ initialcount }) {
  const [amount, setAmount] = useState(0);
  const [state, dispatch] = useReducer(ReducerCount, initialcount, init);
  const incrementAsync = () => {
    setTimeout(() => dispatch({ type: ACTIONS.INCREMENT_ASYNC }), 3000);
  };
  return (
    <section className="container">
      <h3>Counter con useReducer()</h3>
      Count: {state.count}
      <input
        type="number"
        name=""
        id=""
        placeholder="Add amount..."
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.INCREMENT_AMOUNT,
            payload: amount,
          })
        }
      >
        Add Amount
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.RESET, payload: initialcount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={incrementAsync}>ASYNC +10</button>
    </section>
  );
}
export default CounterReducer;
