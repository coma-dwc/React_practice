import { useState } from "react";

const Example = () => {
    const [ count, setCount ] = useState(0);
    const countUp = () => {
      setCount(count + 1);  
      setCount(prevstate => prevstate + 1);
    };

    const countDown = () => {
      setCount(count - 1);  
    };
    return (
        <>
            <p>現在のカウント数： {count}</p>
            <button
              onClick={countUp}
            >+</button>

            <button
              onClick={countDown}
            >-</button>
        </>
    );
};

export default Example;

// 元々の記述

// import { useState } from "react";

// const Example = () => {
  
// };

// export default Example;
