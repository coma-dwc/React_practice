import { createStore, combineReducers } from "redux";
import { reducer } from "./modules/counter"


const reducers = combineReducers({
  counter: reducer,
});

export default createStore(reducers);


// 元々の記述

// import { createStore, combineReducers } from "redux";

// const initialState = 0;
// const reducer = (state = initialState, { type, step }) => {
//   console.log(type);
//   switch (type) {
//     case "counter/+":
//       return state + step;
//     case "counter/-":
//       return state - step;
//     default:
//       return state;
//   }
// };
// const reducer2 = (state = initialState, { type, step }) => {
//   console.log(type);
//   switch (type) {
//     case "counter2/+":
//       return state + step;
//     case "counter2/-":
//       return state - step;
//     default:
//       return state;
//   }
// };

// const reducers = combineReducers({
//   counter: reducer,
//   counter2: reducer2,
// });

// export default createStore(reducers);
