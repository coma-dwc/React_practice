import { add, minus, addAsync } from "../store/modules/counter"

import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

const Counter = () => {
    return (
        <>
            <CounterResult />
            <CounterButton step={2} calcType="+" actionCreator={add}/>
            <CounterButton step={2} calcType="-" actionCreator={minus}/>
            <CounterButton step={2} calcType="非同期(+)" actionCreator={addAsync}/>
        </>
    )
}
export default Counter;

// 元々の記述

// import CounterResult from "./CounterResult"
// import CounterButton from "./CounterButton"

// const Counter = () => {
//     return (
//         <>
//             <CounterResult />
//             <CounterButton step={2} calcType="+"/>
//             <CounterButton step={2} calcType="-"/>
//             <CounterButton step={10} calcType="+"/>
//             <CounterButton step={10} calcType="-"/>
//         </>
//     )
// }
// export default Counter;