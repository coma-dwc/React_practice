import { useState } from "react";

import SubButton from "./components/SubButton";
import "./Example.css";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);



  return (
    <>
      <button className={`btn ${isSelected ? "selected" : ""}`} onClick={clickHandler}>
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

// const Example = () => {
//   const [isSelected, setIsSelected] = useState(false);

//   const clickHandler = () => setIsSelected((prev) => !prev);

//   const style = {
//     margin: "auto",
//     "border-radius": "9999px",
//     border: "none",
//     display: "block",
//     width: 120,
//     height: 60,
//     fontWeight: "bold",
//     cursor: "pointer",
//     backgroundColor: isSelected ? "pink" : "",
//   };

//   return (
//     <>
//       <button style={style} onClick={clickHandler}>
//         ボタン
//       </button>
//       <div style={{ textAlign: "center" }}>
//         {isSelected && "クリックされました。"}
//       </div>
//     </>
//   );
// };

// export default Example;