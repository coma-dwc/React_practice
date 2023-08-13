import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/counter"


export default configureStore({
  reducer: {
    counter: reducer
  }
});

// 元々の記述

// import { createStore, combineReducers } from "redux";
// import { reducer } from "./modules/counter"


// const reducers = combineReducers({
//   counter: reducer,
// });

// export default createStore(reducers);