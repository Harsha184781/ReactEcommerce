import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Components/Homepage'
import ProductD from '../Components/ProductD'
import Shop from '../Components/Shop'
import Cart from '../Components/Cart'


// this is the routing page where we mentioned the things giving path and element dynamically for navigating with path 
// andd with particular component.

const Routings = () => {
  return (
    <Routes>
    <Route path="/"  element={<Homepage/>}/> 
    <Route path="/productdetails/:id"  element={<ProductD/>}/>
    <Route path="/productdetails/shop"  element={<Shop/>}/>
    <Route path="/product/cart"  element={<Cart/>}/>
   
</Routes>
  )
}

export default Routings


