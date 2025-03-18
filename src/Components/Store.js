import { configureStore } from "@reduxjs/toolkit";
import cartslice from './CartSlice'

const Store = configureStore({
    reducer:{
        cart : cartslice
    }
})

export default Store