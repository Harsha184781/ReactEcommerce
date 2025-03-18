import React from 'react'
import { discountProducts } from '../products'
import { FaStar } from 'react-icons/fa'
import { CiCirclePlus } from 'react-icons/ci'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { add } from './CartSlice';
import { useDispatch } from 'react-redux';


const Discount = () => {
  const dispatch = useDispatch()
  const notify = () => toast.success("Product has been added to Cart");
  const addbtn = (ele)=>{
    notify()
    dispatch(add(ele))

  }
    const arr = [1,2,3,4,5]
  return (
    <div className='bg-light'> 
    <div className='pb-4'>
        <div className=' pt-5'>
            <h1 className='mt-5 text-center'>Big Discounts</h1>
        </div>

        <div className='container'>
            <div className='row m-5'>
        {
               discountProducts.map((ele)=>(
               
               
              <div   key={ele.id} className="card col-lg-4  m-2 shadow-sm border-0" style={{width:"25vw",padding:"10px",}} >
                <Link to={`/productdetails/${ele.id}`} style={{textDecoration:"none",color:"black"}}>
       <div style={{backgroundColor:"darkblue",color:"white",borderRadius:"18px",width:"78px",height:"34px",padding:"4px",textAlign:"center"}}>
        <p>{`${ele.discount}% Off`} </p>
        </div>             
  <img style={{width:"22vw", height:"50vh"}} src={ele.imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 >{ele.productName}</h3>
   <div>
    <div className="d-flex">
    {
      arr.map((ele)=>(
       <p key = {ele} className='ps-1' style={{color:"gold", fontSize:"20px"}}><FaStar/></p>
      ))
    }
    </div>
<div className='d-flex justify-content-between'>
    <h3 className='p-2'>{`$ ${ele.price}`}</h3>
    
    </div>


   </div>
  </div>
  </Link>
  <button style={{ border: "none", backgroundColor: "white", position: "absolute", left: "300px" , bottom:"50px"}} onClick={()=>addbtn(ele)}><CiCirclePlus style={{ fontSize: "50px" }} /></button>
                    <ToastContainer />
</div>

               ))
        }
        </div>
        </div>
    </div>
    </div>
   
  )
}

export default Discount