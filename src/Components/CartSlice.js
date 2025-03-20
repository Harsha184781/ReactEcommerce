import { createSlice } from "@reduxjs/toolkit";


// so this is the cart slice in this we are having name,initial state,reducers so in reducers we are having methods and this methods helps us to modify the initial state, and methods having parameters are two state,action 
// we are getting the thing where we passed aruguments for methods in action.payload

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
       
        },

        remove(state,action){
            let index = state.findIndex(item => item.id === action.payload.id);
        for(let x of state){
            if(x.id == action.payload.id ){
                
                x.quantity--
                if(x.quantity==0){
                    state.splice(index, 1);   
                }
            }
        }       
        },

        deletee(state,action){
            return(state.filter(ele => ele.id!= action.payload.id))
        },
        
    }

})


export const {add,remove,deletee}  = cartslice.actions
export default cartslice.reducer