import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodoUser = createAsyncThunk("todo/alta",async ()=> {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
    return res.data
})
export const postTodoUser = createAsyncThunk("todo/love" ,async data => {
    const dataTodo = {
       title:data
    }
    await axios.post('https://jsonplaceholder.typicode.com/photos',dataTodo)
    return dataTodo
})
const todo = createSlice({
    name:"todo",
    initialState: {listUser:[]},
    reducers : {

    },
    extraReducers: {
        [getTodoUser.pending] : (state,action) => {
            console.log("Pending...");
        },
        [getTodoUser.fulfilled] : (state,action) => {
            state.listUser = action.payload
        },
        [getTodoUser.rejected] : (state,action) => {
            console.log("some thing wrong...");
        },
        [postTodoUser.fulfilled] : (state,action)=> {
            state.listUser.unshift(action.payload)
        }
    }
})
const {actions,reducer} = todo;
export const {} = actions;
export default reducer