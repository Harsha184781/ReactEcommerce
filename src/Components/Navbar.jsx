import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'
import sty from "./mo.module.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {
  
  const data = useSelector((ele)=>ele.cart)


  return (
    <>

<div className={sty.bor}>
            <ul className={`nav justify-content-end ${sty.boe} `}>
            <li className="nav-item  ps-5 ms-5 fs-5 position-absolute start-0">
                    <img className="mt-2" src="https://lms.achieversit.com/assets/images/logo.png" alt="" />
                </li>
               <div className='d-flex me-5 pe-5'>
                <Link to="/" style={{textDecoration:"none",color:"black"}} className="nav-item m-3 mt-4 me-5 pt-2 fs-5 fw-bold">
                   <span aria-current="page" >Home</span>
                </Link>
                <Link to="/productdetails/shop"  style={{textDecoration:"none",color:"black"}} className="nav-item m-3 mt-4  me-5 pt-2 fs-5 fw-bold">
                    <span>Shop</span>
                </Link>
                <Link to="/product/cart" style={{textDecoration:"none",color:"black"}} className="nav-item m-3 mt-4 me-5 pt-2 fs-5 fw-bold">
                    <span >Cart</span>
                </Link>
               
                <li className="nav-item mt-4 m-3  pt-2 fs-5 ">
                    <FaUser />
                </li>
                <Link to="/product/cart" style={{textDecoration:"none",color:"black"}} className="nav-item mt-4  pt-2 fs-5 ">
                    <IoCart/>
                    <p style={{backgroundColor:"darkblue",borderRadius:"50%", color:"white",fontSize:"10px",textAlign:"center",width:"15px",position:"relative",bottom:"30px",left:"8px"}}>{data.length}</p>
                </Link>
                </div>
            </ul>
        </div>


    </>
  )
}

export default Navbar