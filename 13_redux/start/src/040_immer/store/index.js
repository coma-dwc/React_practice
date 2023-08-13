import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/counter";

export default configureStore({
  reducer: {
    counter: reducer
  }
});

// 元々の記述

// import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./modules/counter";

// export default configureStore({
//   reducer: {
//     counter: reducer
//   }
// });
