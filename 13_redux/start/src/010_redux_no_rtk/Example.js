import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";

import { Provider } from "react-redux";
import store from "./store"

//useContext x useReducer => Reduxに書き換え
const Example = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Example;


// 元々の記述

// import Counter from "./components/Counter";
// import { CounterProvider } from "./context/CounterContext";

//useContext x useReducer
// const Example = () => {
//   return (
//     <CounterProvider>
//       <Counter />
//     </CounterProvider>
//   );
// };

// export default Example;