import { useSelector } from "react-redux"
const CounterResult = () => {
  const state = useSelector(state => state);
  return <h3>{state.counter}</h3>;
};

export default CounterResult;

// 元々の記述

// import { useSelector } from "react-redux"
// const CounterResult = () => {
//   const state = useSelector(state => state);
//   return <h3>{state.counter}</h3>;
// };

// export default CounterResult;