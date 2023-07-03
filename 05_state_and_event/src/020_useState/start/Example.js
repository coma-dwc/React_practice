import { useState } from "react";

const Example = () => {
  let valArry = useState();   
  return (
    <>
      <input 
      type="text"
      onChange={(e) => {
        const setFn = valArry[1];  //配列の1番目には更新用の値
        setFn(e.target.value)
      }} /> = {valArry[0]}    //配列の0番目には参照用の値
    </>
  );
};

export default Example;


// 元々の記述

// const Example = () => {

//   return (
//     <>
      
//     </>
//   );
// };

// export default Example;
