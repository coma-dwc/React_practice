import { useCounterDispatch } from "../context/CounterContext";

const CounterButton = ({calcType, step}) => {

    const dispatch = useCounterDispatch();
    
    const clickHandler = () => {
        dispatch({ type: calcType, step });
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;

// 元々の記述

// const CounterButton = ({calcType, step, onClick}) => {
    
//     return <button onClick={onClick}>{calcType}{step}</button>
// }
// export default CounterButton;