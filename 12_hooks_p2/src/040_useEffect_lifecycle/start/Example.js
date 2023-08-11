import { useState, useEffect } from "react";

const Example = () => {
  const [state, setState] = useState(0);

  useEffect(
    function update() {
      console.log("update");

      return function cleanUp() {
        console.log("update cleanup");
      };
    },
    [state]
  );

  useEffect(() => {
    console.log("mount");

    return() => {
      console.log("mount cleanup");
    };
  }, []);

  console.log("render");

  return (
    <>
      <button onClick={() => setState((prev) => prev + 1)}>更新</button>
      <h3>useEffectの呼ばれるタイミングをコンソールで確認してみよう</h3>
    </>
  );
};

export default Example;

// 元々の記述

// const Example = () => {
//   return (
//     <h3>useEffectの呼ばれるタイミングをコンソールで確認してみよう</h3>
//   );
// };

// export default Example;