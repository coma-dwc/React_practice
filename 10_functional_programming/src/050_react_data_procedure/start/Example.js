import { useState } from "react";

// 状態管理と処理を分離

// 関数型（純粋関数）
// ・fn(決まった引数) -> 決まった戻り値
// ・関数外の状態（データ）は参照・変更しない
// ・関数外に影響を及ぼさない
// ・引数で渡された値を変更しない

let value = 0;
const Example = () => {
  // JSXを作成する場所
  const [ state, setState ] = useState(0);
  const increment = () => {
    setState(state + 1);
  }
  window.alert('hello')  //副作用になるようなものはここ(JSXを作成する場所)には書かない
  return (
    <>
      <button onClick={increment}>+</button>
      <h3>{state}</h3>
    </>
  );
};

export default Example;

// 元々の記述

// import { useState } from "react";

// const Example = () => {
//   const [ state, setState ] = useState(0);
//   const increment = () => {
//     setState(state + 1);
//   }
//   return (
//     <>
//       <button onClick={increment}>+</button>
//       <h3>{state}</h3>
//     </>
//   );
// };

// export default Example;