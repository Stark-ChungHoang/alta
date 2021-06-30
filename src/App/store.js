import { configureStore } from '@reduxjs/toolkit';
import channelReducer from "../features/channel"
import dataInputReducer from "../features/dataInput"
export const store = configureStore({
  reducer: {
    channel:channelReducer,
    dataInput:dataInputReducer,
  },
});