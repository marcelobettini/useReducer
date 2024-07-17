import "./App.css";
import CounterReducer from "./CounterReducer";
import Counter from "./CounterState";

function App() {
  return (
    <>
      <Counter initialCount={10} />
      <CounterReducer initialcount={2} />
    </>
  );
}

export default App;
