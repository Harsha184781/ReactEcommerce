import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Foot from './Foot'
import { useDispatch, useSelector } from 'react-redux'
import { ImCross } from 'react-icons/im'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { add } from './CartSlice'


const Cart = () => {

    const data = useSelector(data => data.cart)
    const dispatch = useDispatch()

    
       
    


    return (
        <>
            <div className='bg-light'>
                <Navbar />
                <div className='d-flex'>

                    <div className='mt-5 me-4 ms-5'>
                        {data.length > 0 ? data.map((ele) => {
                            return (

                                <div key={ele.id} className='bg-white p-4 mt-4' style={{ marginLeft: "7vw", borderRadius: "5px", height: "25vh", width: "50vw" }}>
                                    <div className='d-flex'>
                                        <div style={{ alignItems: "center" }}>
                                            <img style={{ width: "9vw" }} src={ele.imgUrl} />
                                        </div>
                                        <div className='m-3 ms-4' style={{ width: "24vw" }}>
                                            <h5>{ele.productName}</h5>
                                            <div className='d-flex mt-5 '>
                                                <p style={{ fontWeight: 600, color: "grey" }}>${ele.price}.00 * {ele.quantity}</p>
                                                <p style={{ fontWeight: 600, marginLeft: "20px" }}>${ele.price * ele.quantity}.00</p>
                                            </div>
                                        </div>

                                        <div style={{ marginLeft: "150px" }}>
                                            <ImCross style={{ fontSize: "20px",position:"relative",left:"4vw",cursor:"pointer"}} />
                                            <div className='d-flex' style={{ marginTop: "11vh" }}>
                                                <div onClick={ ()=>dispatch(add)} style={{cursor:"pointer", border:"2px solid", borderColor:"#ebe8e8"}}><FaPlus style={{ fontSize: "20px", margin: "10px",}} /></div>
                                                <div style={{ cursor:"pointer",backgroundColor:"#ebe8e8", marginLeft:"4px"}}> <FaMinus style={{ fontSize: "20px", margin: "10px" ,marginTop:"12px" }} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) :
                            <div className='bg-white p-4 mt-4' style={{ marginLeft: "7vw", borderRadius: "5px", height: "20vh", width: "50vw" }}>
                                <h5>No Items are add in Cart</h5>
                            </div>

                        }
                    </div>


                    <div className='mt-3'>
                        <div className=' bg-white p-4 mt-5 ' style={{ width: "25vw", borderRadius: "5px", height: "22vh" }}>
                            <h5>Cart Summary</h5>
                            <hr style={{ color: "grey", borderWidth: "1px" }} />
                            <p>Total Price</p>
                            <h5>$0.00</h5>
                        </div>
                    </div>

                </div>

                <Foot />
            </div>
        </>
    )
}

export default Cart