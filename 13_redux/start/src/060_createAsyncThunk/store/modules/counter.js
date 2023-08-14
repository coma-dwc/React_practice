import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { asyncCount } from "../../api/counter"

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    status: ''
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addAsyncWithStatus.pending, (state) => {    //非同期通信の状態：pendingと定義
      state.status = 'Loading...'
    })
    .addCase(addAsyncWithStatus.fulfilled, (state, action) => {   //非同期通信の状態：fulfilledと定義
      state.status = '取得済'
      state.count = state.count + action.payload;
    })
    .addCase(addAsyncWithStatus.rejected, (state) => {     //非同期通信の状態：rejectedと定義
      state.status = 'エラー'
    })

  }
});

const { add, minus } = counter.actions;

const addAsyncWithStatus = createAsyncThunk(
  'counter/asyncCount', //タイプを一意に設定
  async (payload) => {                          //非同期処理を記述
    const response = await asyncCount(payload);
    return response.data;
  }
)

const addAsync = (payload) => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log(state);
    const response = await asyncCount(payload);
    dispatch(add(response.data));
  }
}


export { add, minus, addAsync, addAsyncWithStatus }
export default counter.reducer

// 元々の記述

// import { createSlice } from "@reduxjs/toolkit";

// import { asyncCount } from "../../api/counter"

// const counter = createSlice({
//   name: 'counter',
//   initialState: {
//     count: 0
//   },
//   reducers: {
//     add(state, { type, payload }) {
//       state.count = state.count + payload;
//       // const newState = { ...state };
//       // newState.count = state.count + payload
//       // return newState;
//     },
//     minus(state, { type, payload }) {
//       state.count = state.count - payload;
//       // const newState = { ...state };
//       // newState.count = state.count - payload
//       // return newState;
//     }
//   }
// });

// const { add, minus } = counter.actions;

// const addAsync = (payload) => {
//   return async (dispatch, getState) => {
//     const state = getState();
//     console.log(state);
//     const response = await asyncCount(payload);
//     dispatch(add(response.data));
//   }
// }


// export { add, minus, addAsync }
// export default counter.reducer