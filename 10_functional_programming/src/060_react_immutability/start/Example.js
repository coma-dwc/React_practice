import { useState } from "react";

// 関数型（純粋関数）
// ・fn（決まった引数）-> 決まった戻り値
// ・関数外の状態（データ）は参照・変更しない
// ・関数外に影響を及ぼさない
// ・引数で渡された値を変更しない (propsを変更しない)　（★Immutability）

const Child = ({ state, setState }) => {
  // setState({ value: 1 })
  // props.state = { value: 1 }
  const increment = () => {
    setState(prev => {
      const newState = { value: prev.value + 1 }
      // prev.value += 1;
      return newState;
    })
  }
  return (
    <>
      <span>{state.value}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

const Example = () => {
  const [ state, setState ] = useState({ value: 0 });

  return (
    <>
      <div>
        <Child state={state} setState={setState}/>
      </div>
    </>
  );
};

export default Example;

// 元々の記述

// import { useState } from "react";

// const Child = (props) => {
//   return (
//     <>
//       <span>{props.state.value}</span>
//     </>
//   );
// };

// const Example = () => {
//   const [ state, setState ] = useState({ value: 0 });

//   return (
//     <>
//       <div>
//         <Child state={state}/>
//       </div>
//     </>
//   );
// };

// export default Example;