import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/counter";
import logger from "./middleware/logger"

export default configureStore({
  reducer: {
    counter: reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)  //左は下記を省略して書いた場合
  // {
  //   const middlewares = getDefaultMiddleware();
  //   console.log(middlewares)
  //   const newMiddlewares = middlewares.concat(logger);
  //   return newMiddlewares;
  // }
});

// 元々の記述

// import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./modules/counter";

// export default configureStore({
//   reducer: {
//     counter: reducer
//   }
// });

