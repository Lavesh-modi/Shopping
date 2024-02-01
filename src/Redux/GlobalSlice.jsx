import { createSlice } from "@reduxjs/toolkit";


export const globalSlice = createSlice({
    name: "global",
    initialState:{
        value:[],

    },
    reducers:{
        data:(state,action) =>{
            state.value= action.payload;
            console.log(state,"state")
            console.log(action.payload,"action payload")
        }
    }
})


export const {data}=globalSlice.actions;
export default  globalSlice.reducer; 