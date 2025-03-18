import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name :"cart",
    initialState:[],
    reducers:{
        add(state,action){
        console.log(action.payload)
        state.push(action.payload)
        },
        remove(state,action){
            (state.filter((ele)=>ele.id!=action.payload))
        }
    }

})


export const {add,remove}  = cartslice.actions
export default cartslice.reducer