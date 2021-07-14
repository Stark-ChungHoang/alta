import { configureStore } from '@reduxjs/toolkit';
import channelReducer from "../features/channel"
import dataInputReducer from "../features/dataInput"
import todoReducer from "./TodoReducer/todoReducer"
export const store = configureStore({
  reducer: {
    channel: channelReducer,
    dataInput: dataInputReducer,
    listUser: todoReducer,
  },
});