import { useReducer } from "react";
import "./styles.css";

const intialValue = 0;
const reducer = (state, action) => {
  if (action.type === "incr") {
    return state + 1;
  } else if (action.type === "decr") {
    return state - 1;
  }
  return state;
};
function useReduc() {
  const [state, dispatch] = useReducer(reducer, intialValue);
  return (
    <>
      <div className="main">
        <h3>Increment and Decrement Number With useReduce Hook</h3>

        <div className="container">
          <h1>{state}</h1>
          <button className="btnInc" onClick={() => dispatch({ type: "incr" })}>
            Incrment
          </button>
          <button className="btnDec" onClick={() => dispatch({ type: "decr" })}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default useReduc;
