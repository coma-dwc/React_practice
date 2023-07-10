import { useState } from "react";

import SubButton from "./components/SubButton";
import styles from "./Example.module.css";

// console.log(styles);

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <button className={`${styles.btn} ${isSelected ? styles.selected : ""}`} onClick={clickHandler}>
        ボタン
      </button>
      <SubButton />
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;

// 元々の記述

// import { useState } from "react";

// import SubButton from "./components/SubButton";
// import "./Example.css";

// const Example = () => {
//   const [isSelected, setIsSelected] = useState(false);

//   const clickHandler = () => setIsSelected((prev) => !prev);

//   return (
//     <>
//       <button className={`btn ${isSelected ? "selected" : ""}`} onClick={clickHandler}>
//         ボタン
//       </button>
//       <SubButton />
//       <div style={{ textAlign: "center" }}>
//         {isSelected && "クリックされました。"}
//       </div>
//     </>
//   );
// };

// export default Example;