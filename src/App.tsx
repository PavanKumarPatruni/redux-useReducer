import { useCallback, useReducer } from "react";

import "./App.css";

const INIT_STATE = { count: 0 };

const countReducer = (state: typeof INIT_STATE, action: { type: string }) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return INIT_STATE;
    case "SWITCH_SIGN":
      return { count: state.count * -1 };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

function App() {
  const [state, dispatch] = useReducer(countReducer, INIT_STATE);

  const increment = useCallback(() => {
    dispatch({ type: "INCREMENT" });
  }, []);

  const decrement = useCallback(() => {
    dispatch({ type: "DECREMENT" });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  const switchTheSign = useCallback(() => {
    dispatch({ type: "SWITCH_SIGN" });
  }, []);

  return (
    <>
      <p>count is {state.count}</p>
      <div className="flex">
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <button onClick={switchTheSign}>switch the sign</button>
      </div>
    </>
  );
}

export default App;
