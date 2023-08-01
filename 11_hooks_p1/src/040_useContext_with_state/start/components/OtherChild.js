import { useContext } from "react";
import { MyContext } from "../Example";
const OtherChild = () => {
  const [,setState] = useContext(MyContext)
  const clickHandler = (e) => {
    setState((prev) => prev + 1);
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
    </div>
  );
};

export default OtherChild;

// 元々の記述

// import { useState } from "react";

// const OtherChild = () => {
//   const [ value, setValue ] = useState(0);

//   const clickHandler = (e) => {
//     setValue((prev) => prev + 1);
//   };

//   return (
//     <div>
//       <h3>他の子コンポーネント</h3>
//       <button onClick={clickHandler}>+</button>
//       <h3>{value}</h3>
//     </div>
//   );
// };

// export default OtherChild;
