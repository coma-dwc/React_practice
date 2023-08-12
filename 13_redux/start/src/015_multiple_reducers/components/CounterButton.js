import { useDispatch } from "react-redux";
import { useCounterDispatch } from "../context/CounterContext";

const CounterButton = ({calcType, step}) => {
    
    const dispatch = useDispatch();
    // const dispatch = useCounterDispatch();
    
    const clickHandler = () => {
        dispatch({ type: 'counter/' + calcType, step });
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;

// 元々の記述

// import { useDispatch } from "react-redux";
// import { useCounterDispatch } from "../context/CounterContext";

// const CounterButton = ({calcType, step}) => {
    
//     const dispatch = useDispatch();
//     // const dispatch = useCounterDispatch();
    
//     const clickHandler = () => {
//         dispatch({ type: calcType, step });
//     }

//     return <button onClick={clickHandler}>{calcType}{step}</button>
// }
// export default CounterButton;