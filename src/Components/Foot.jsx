import React from 'react'
import { IoBag } from 'react-icons/io5'

//this the footer component this component is used for all pages by importing this component in the components wherever we want
// this footer component is static component.

const Foot = () => {
    return (
        <div className='container-fluid' style={{color:"white",backgroundColor: "darkblue" }}>
             
                <div className=' mt-5 pt-2 ms-5 d-flex'>
                <h4 style={{marginLeft:"40px"}}  className='fw-bold mt-5 pt-2 ps-5'><span style={{position:"relative", bottom:"5px"}}><IoBag /></span>  Mart </h4>
                <h4 style={{marginLeft:"220px"}} className='mt-5 pt-2 ps-5 '>About Us</h4>
                <h4 style={{marginLeft:"135px"}}className='mt-5 pt-2 ps-5 '>Customer Care</h4>
                <h4 style={{marginLeft:"135px"}} className='mt-5 pt-2 ps-5'>Contact Us</h4>
                   
                </div>

                <div className='d-flex' style={{paddingBottom:"30px"}}>
                <p style={{color:'grey',width:"200px",paddingTop:"10px", marginLeft:"135px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus enim tempora adipisci id error perferendis minus voluptatem, repudiandae commodi corporis eaque beatae facere itaque modi cum repellendus voluptates quidem at.</p>

                    <ul  style={{color:'grey', listStyleType:"none",marginLeft:"120px"}}>
                        <li className='pt-3'>Careers</li>
                        <li className='pt-3'>Our Stores</li>
                        <li className='pt-3'>Our Cares</li>
                        <li className='pt-3'>Terms & Conditions</li>
                        <li className='pt-3'>Privacy Policy</li>
                    </ul>

                
               

               
                    <ul className=''  style={{color:'grey', listStyleType:"none" ,marginLeft:"120px"}}>
                        <li className='pt-3'>Help Center</li>
                        <li className='pt-3'>How to Buy</li>
                        <li className='pt-3'>Track Your Order</li>
                        <li className='pt-3'>Coperate & Bulk<br/>Purchasing</li>
                        <li className='pt-3'>Returns & Refunds</li>
                    </ul>

               


                
                   
              
                    <ul className=''  style={{color:'grey', listStyleType:"none",marginLeft:"180px"}}>
                        <li className='pt-3'>70 Washington Square<br/>South, New York, NY 10012,<br/>United States</li>
                        <li className='pt-3'>Email:example@gmail.com</li>
                        <li className='pt-3'>Phone:+1 1123 456 780</li>

                    </ul>

                </div>


            </div>
       
    
    )
}

export default Foot