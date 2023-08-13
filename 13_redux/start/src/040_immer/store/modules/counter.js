import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload; //ミュータブルな操作
      // const newState = { ...state };  
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload; //ミュータブルな操作
      // const newState = { ...state };  
      // newState.count = state.count - payload
      // return newState;
    }
  }
})

const { add, minus } = counter.actions;

export { add, minus }
export default counter.reducer

// 元々の記述

// import { createSlice } from "@reduxjs/toolkit";

// const counter = createSlice({
//   name: 'counter',
//   initialState: 0,
//   reducers: {
//     add(state, { type, payload }) {
//       console.log(type, payload)
//       return state + payload;
//     },
//     minus(state, { type, payload }) {
//       console.log(type, payload)
//       return state - payload;
//     }
//   }
// })

// const { add, minus } = counter.actions;

// export { add, minus }
// export default counter.reducer