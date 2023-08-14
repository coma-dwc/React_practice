import { useSelector } from "react-redux"
const CounterResult = () => {
  const count = useSelector(state => state.counter.count);
  return <h3>{count}</h3>;
};

export default CounterResult;

// 元々の記述

// import { useSelector } from "react-redux"
// const CounterResult = () => {
//   const count = useSelector(state => state.counter.count);
//   return <h3>{count}</h3>;
// };

// export default CounterResult;