import { createSlice } from "@reduxjs/toolkit";


const dataInput = createSlice({
    name:"dataInput",
    initialState:{
        
         dataInput:[],
    },
    reducers: {
          
    getDataInput:(state,action)=> {
        state.dataInput = action.payload
        // let newState = state.dataInput;
        // newState.push(action.payload)
    }
}})
 const {actions,reducer} = dataInput;
export const {getDataInput} = actions;
export default reducer