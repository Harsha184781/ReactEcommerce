import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name :"cart",
    initialState:[],
    reducers:{
        add(state,action){
       
        let present = false

        for(let x of state){
            if(x.id == action.payload.id){
                present = true
                x.quantity++
            }
        }
       if(present == false){
          action.payload.quantity = 1 
          state.push(action.payload)
         
       }
       console.log(action.payload)
        },
        remove(state,action){
            let present = false

        for(let x of state){
            if(x.id == action.payload.id ){
                present = true
                x.quantity--
                if(x.quantity==0){
                    return(state.filter(ele=> x.id!=ele.id))
                }
            }
        }
     
       console.log(action.payload)
            
        }
    }

})


export const {add,remove}  = cartslice.actions
export default cartslice.reducer