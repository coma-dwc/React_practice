import { useDispatch } from "react-redux";
import { add, minus } from "../store/modules/counter"

const CounterButton = ({calcType, step}) => {
    
    const dispatch = useDispatch();
    // const dispatch = useCounterDispatch();
    
    const clickHandler = () => {
        const action = calcType === '+' ? add(step) : minus(step);
        console.log(action)
        dispatch(action);
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;

// 元々の記述

// import { useDispatch } from "react-redux";

// const CounterButton = ({calcType, step}) => {
    
//     const dispatch = useDispatch();
//     // const dispatch = useCounterDispatch();
    
//     const clickHandler = () => {
//         dispatch({ type: 'counter2/' + calcType, step });
//     }

//     return <button onClick={clickHandler}>{calcType}{step}</button>
// }
// export default CounterButton;