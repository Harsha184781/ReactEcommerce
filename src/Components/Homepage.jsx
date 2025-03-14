import React from 'react'
import Navbar from './Navbar'
import Discount from './Discount'
import Newarrivals from './Newarrivals'
import Foot from './Foot'
import Cards from './Cards'
import Reactslick from './Reactslick'
import Best from './Best'
import Routings from '../routes/Routings'


const Homepage = () => {
  return (
    <div>
 <Navbar/>
    <div className='bg-light'>
    <div className='container '>
    <Reactslick/>
    </div>
    </div>
    <Cards/>
    <Discount/>
    <Newarrivals/>
    <Best/>
    <Foot/>
    
    </div>
  )
}

export default Homepage