import { configureStore } from "@reduxjs/toolkit";
import cartslice from './CartSlice'

//this is the store for this store we getting cartslice by importing from cartslice file and this cartslice should mention in the 
// object of reducer having key same as name in cart slicefile and value as imported name 
// and we are going to export store to use the state in components where ever we need and wrapping the main 
// component in the Provider.

const Store = configureStore({
    reducer:{
        cart : cartslice
    }
})

export default Store