import { FaStar } from 'react-icons/fa'
import { CiCirclePlus } from 'react-icons/ci'
import React, { useEffect, useState } from 'react'
import { products } from '../products'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { add } from './CartSlice';
import { useDispatch } from 'react-redux';

const Best = () => {

  const notify = () => toast.success("Product has been added to Cart");

  const arr = [1, 2, 3, 4, 5]

  const [product, SetProduct] = useState([])


  useEffect(() => {
    SetProduct((products.filter(ele => ele.category == "sofa")));
  }, [])

  const dispatch = useDispatch()
    const addbtn = (ele)=>{
      notify()
      dispatch(add(ele))
  
    }



  return (
    <div className='bg-light'>
      <div className='pb-4'>
        <div className=' pt-5'>
          <h1 className='mt-5 text-center'>Best Sales</h1>
        </div>

        <div className='container'>
          <div className='row m-5'>
            {
              product.map((ele) => (
                <div key={ele.id} className="card col-lg-4  m-2 shadow-sm border-0" style={{width: "25vw", padding: "10px" }} >
                  <Link to={`/productdetails/${ele.id}`} style={{textDecoration:"none"}}>
                    <img style={{ width: "22vw", height: "50vh" }} src={ele.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h3 style={{color:"black"}}>{ele.productName}</h3>
                      <div>
                        <div className="d-flex">
                          {
                            arr.map((ele) => (
                              <p key={ele} className='ps-1' style={{ color: "gold", fontSize: "20px" }}><FaStar /></p>
                            ))
                          }
                        </div>
                        <div className='d-flex justify-content-between'>
                          <h3 style={{textDecoration:"none",color:"black"}} className='p-2'>{`$ ${ele.price}`}</h3>
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

export default Best