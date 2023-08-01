import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";
// POINT useContext x useReducer
const Example = () => { 
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default Example;

// 元々の記述

// import { useReducer } from "react";
// import Counter from "./components/Counter";

// // POINT useContext x useReducer
// const Example = () => {
//   const [state, dispatch] = useReducer((prev, { type, step }) => {
//     switch (type) {
//       case "+":
//         return prev + step;
//       case "-":
//         return prev - step;
//       default:
//         throw new Error('不明なactionです。')
//     }
//   }, 0);

//   const countUp = () => {
//     dispatch({ type: "+", step: 2 });
//   };
//   const countDown = () => {
//     dispatch({ type: "-", step: 2 });
//   };
//   return (
//     <>
//       <Counter state={state} countUp={countUp} countDown={countDown} />
//     </>
//   );
// };

// export default Example;