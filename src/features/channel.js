import { createSlice } from "@reduxjs/toolkit";


const chanel = createSlice({
    name:"channel",
    initialState:{
        channel:[],
        user:{}
       
    },
    reducers: {
                getData: (state,action) => {
                    console.log(action.payload);
                    state.chanel = action.payload
    },
    getUser: (state,action)=> {
       state.user=action.payload
    }
   
}})
 const {actions,reducer} = chanel;
export const {getData,getUser} = actions;
export default reducer