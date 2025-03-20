import React from 'react'
import sty from "./mo.module.css"
import { FaCar, FaHeadphones } from 'react-icons/fa'
import { BsCreditCardFill } from 'react-icons/bs'
import { GiLayeredArmor } from 'react-icons/gi'
import { serviceData } from '../products'
 
// this the component in homepage and describing about page. the data is imported from product.jsx


const Cards = () => {
  return (
    <>
    <div className='container  mt-5 mb-5'>
      <div className="row "> 

        <div className="col-3" >
  <div className={` ${sty.car}`}  style={{backgroundColor:serviceData[0].bg}}>
 
   <div style={{ margin:"13% 47%",textAlign:"center",backgroundColor:"white",borderRadius:"50%", height:"30px", width:"30px",}}><FaCar/></div>
   
    <h5>Free Shipping</h5>
    <p className='mt-3'>Lorem ipsum dolor sit amet.</p>
  </div>
</div>

<div className="col-3" >
  <div className={` ${sty.car}`}  style={{backgroundColor:serviceData[1].bg,}}>
   <div style={{ margin:"13% 47%",textAlign:"center",backgroundColor:"white",borderRadius:"50%", height:"30px", width:"30px",}}><BsCreditCardFill /></div>
    <h5>Safe Payment</h5>
    <p className='mt-3'>Lorem ipsum dolor sit amet.</p>
  </div>
</div>

<div className="col-3" >
  <div className={` ${sty.car}`}  style={{backgroundColor:serviceData[2].bg}}>
   <div style={{ margin:"13% 47%",textAlign:"center",backgroundColor:"white",borderRadius:"50%", height:"30px", width:"30px",}}><GiLayeredArmor /></div>
    <h5>Secure Payment</h5>
    <p className='mt-3'>Lorem ipsum dolor sit amet.</p>
  </div>
</div>

<div className="col-3" >
  <div className={` ${sty.car}`}  style={{backgroundColor:serviceData[3].bg}}>
   <div style={{ margin:"13% 47%",textAlign:"center",backgroundColor:"white",borderRadius:"50%", height:"30px", width:"30px",}}><FaHeadphones /></div>
    <h5>Back Guarantee</h5>
    <p className='mt-3'>Lorem ipsum dolor sit amet.</p>
  </div>
</div>

</div>
    </div>

    </>
  )
}

export default Cards