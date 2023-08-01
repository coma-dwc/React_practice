import Child from "./components/Child";
import { createContext } from "react";
export const MyContext = createContext('hello');
//useContext
const Example = () => {
  return <Child/>;
};

export default Example;

// 元々の記述

// import Child from "./components/Child";

// const Example = () => {
//   const value = 'hello'
//   return <Child value={value}/>;
// };

// export default Example;