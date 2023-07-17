import { useState } from "react"

const Example = () => {
  const [count, setCount] = useState({ val: 0 });

  console.log('re-render') //再レンダリングされていないから画面が更新されない

  const countUp = () => {
    // console.log('button clicked')
    setCount((prevstate) => {
      console.log('button clicked');
      const newState = { val: prevstate.val + 1 };

      // newState.val += 1;
      // console.log(prevstate)
      return newState;
    });
  };

  return (
    <>
      <p>現在のカウント数: {count.val}</p>
      <button onClick={countUp}>+</button>
    </>
  );
};

export default Example;


// 元々の記述

// const Example = () => {
//   // const [count, setCount] = useState({ val: 0 });

//   // const countUp = () => {
//   //   setCount((prevstate) => {
//   //     prevstate.val += 1;
//   //     return prevstate;
//   //   });
//   // };

//   // return (
//   //     <p>現在のカウント数: {count}</p>
//   //     <button onClick={countUp}>+</button>
//   // );
// };

// export default Example;