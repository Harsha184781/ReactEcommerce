import { configureStore } from "@reduxjs/toolkit";
import cart from './CartSlice'

const Store = configureStore({
    reducer:{
        cart : cart
    }
})

export default Store