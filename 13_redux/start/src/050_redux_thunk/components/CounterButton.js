import { useDispatch } from "react-redux";


const CounterButton = ({calcType, step, actionCreator}) => {
    
    const dispatch = useDispatch();
    const clickHandler = () => {
        // const action = calcType === '+' ? add(step) : minus(step);
        dispatch(actionCreator(step));
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;

// 元々の記述

// import { useDispatch } from "react-redux";
// import { add, minus } from "../store/modules/counter"

// const CounterButton = ({calcType, step}) => {
    
//     const dispatch = useDispatch();
//     const clickHandler = () => {
//         const action = calcType === '+' ? add(step) : minus(step);
//         dispatch(action);
//     }

//     return <button onClick={clickHandler}>{calcType}{step}</button>
// }
// export default CounterButton;