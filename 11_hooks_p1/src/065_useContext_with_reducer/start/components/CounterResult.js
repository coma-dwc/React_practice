import { useCounter } from "../context/CounterContext";

const CounterResult = () => {
  const state = useCounter();
  return <h3>{state}</h3>;
};

export default CounterResult;

// 元々の記述

// const CounterResult = ({ state }) => {
//   return <h3>{state}</h3>;
// };

// export default CounterResult;