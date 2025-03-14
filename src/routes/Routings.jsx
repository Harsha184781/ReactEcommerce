import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Components/Homepage'
import ProductD from '../Components/ProductD'

const Routings = () => {
  return (
    <Routes>
    <Route path="/"  element={<Homepage/>}/> 
    <Route path="/productdetails/:id"  element={<ProductD/>}/>
</Routes>
  )
}

export default Routings


