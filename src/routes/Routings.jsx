import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Components/Homepage'
import ProductD from '../Components/ProductD'
import Shop from '../Components/Shop'

const Routings = () => {
  return (
    <Routes>
    <Route path="/"  element={<Homepage/>}/> 
    <Route path="/productdetails/:id"  element={<ProductD/>}/>
    <Route path="/productdetails/shop"  element={<Shop/>}/>
</Routes>
  )
}

export default Routings


