import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);

    const style = {
        width: 120,
        height: 60,
        display: "block",
        fontWeight: "bold",
        "border-radius": 9999,
        cursor: "pointer",
        border: "none",
        margin: "auto",
        background: isSelected ? "pink" : "",
    }

    return (
        <>
            <button onClick={clickHandler} style={style}>ボタン</button>
            <div style={{ textAlign: "center" }}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;

// 元々の記述

// import { useState } from "react"

// const Example = () => {
//     const [isSelected, setIsSelected] = useState(false);

//     const clickHandler = () => setIsSelected(prev => !prev);

//     return (
//         <>
//             <button onClick={clickHandler}>ボタン</button>
//             <div>{isSelected && "クリックされました。"}</div>
//         </>
//     )
// };

// export default Example;
