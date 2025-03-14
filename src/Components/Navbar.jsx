import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'
import sty from "./mo.module.css"


const Navbar = () => {
  return (
    <>

<div className={sty.bor}>
            <ul className={`nav justify-content-end ${sty.boe} `}>
            <li className="nav-item  ps-5 ms-5 fs-5 position-absolute start-0">
                    <img className="mt-2" src="https://lms.achieversit.com/assets/images/logo.png" alt="" />
                </li>
               <div className='d-flex me-5 pe-5'>
                <li className="nav-item m-3 mt-4 me-5 pt-2 fs-5 fw-bold">
                    <span aria-current="page" >Home</span>
                </li>
                <li className="nav-item m-3 mt-4  me-5 pt-2 fs-5 fw-bold">
                    <span>Shop</span>
                </li>
                <li className="nav-item m-3 mt-4 me-5 pt-2 fs-5 fw-bold">
                    <span >Cart</span>
                </li>
               
                <li className="nav-item mt-4 m-3  pt-2 fs-5 ">
                    <FaUser />
                </li>
                <li className="nav-item mt-4  pt-2 fs-5 ">
                    <IoCart/>
                </li>
                </div>
            </ul>
        </div>


    </>
  )
}

export default Navbar