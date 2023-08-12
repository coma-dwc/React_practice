// import { useCounter } from "../context/CounterContext";
import { useSelector } from "react-redux"
const CounterResult = () => {
  // const state = useCounter();
  const state = useSelector(state => state);
  console.log(state);
  return <h3>{state.counter}:{state.counter2}</h3>;
};

export default CounterResult;

// 元々の記述

// import { useCounter } from "../context/CounterContext";
// import { useSelector } from "react-redux"
// const CounterResult = () => {
//   // const state = useCounter();
//   const state = useSelector(state => state);
//   return <h3>{state}</h3>;
// };

// export default CounterResult;