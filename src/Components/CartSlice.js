import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name :"cart",
    initialState:[],
    reducers:{
        add(state,action){
       state = action.payload
        }
    }

})


export const {add}  = cart.actions
export default cart.reducer