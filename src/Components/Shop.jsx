import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import table from "../assets/Images/table.jpg"
import { FaSearch, FaStar } from 'react-icons/fa'
import { products } from '../products'
import { Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import { CiCirclePlus } from 'react-icons/ci'
import { add } from './CartSlice';
import { useDispatch } from 'react-redux';
 
// This the shop page so this shop having some functions basically there are two one is dropdown list ,
// and another is search so when we going to enter the thing so by using then name key in object its going to 
// filter and rendering into page, and dropdown list in that basically while the selecting the option
// we are getting the option on click we going to update the state that is created by the state its going to filter 
// rendering into the page.


const Shop = () => { 
 
  const dispatch = useDispatch()
  let [data,Setdata] = useState([])
  let [option,Setoption] = useState("")
 const notify = () => toast.success("Product has been added to Cart");

useEffect(()=>{
     if(option===""){
      Setdata(products)
      
     }
     else{
      Setdata(products.filter((ele)=>ele.category===option))
      
     }
},[option])


 
  const addbtn = (ele)=>{
    notify()
    dispatch(add(ele))

  }



  const handle = (option)=>{
           Setoption(option)
  }

  const searchfun=(event)=>{
      const {value} = event.target
      
      Setdata( products.filter((ele)=>ele.productName.toLowerCase().includes(value.toLowerCase())))
  }

    return (
    <>
        <Navbar/>
              <div>
                      <img src={table} className="img-fluid" style={{ height: "40vh", width: "100vw" }} />
      
                  </div>
                  <div
                      style={{
                          position: "absolute",
                          top: 100,
                          left: 0,
                          width: "100%",
                          height: "40vh",
                          backgroundColor: "rgba(0, 0, 0, 0.5)"
                      }}
                  ></div>
      
                 
                          <div>
                              <h1 style={{ color: "white", position: "relative", bottom: "163px", textAlign: "center" }}>product</h1>
                          </div>
 <div className='container'>  
  <div className='row'>


                          <div className="dropdown col-3">
  <button style={{backgroundColor:"darkblue",marginLeft:"25px",width:"200px",display: "flex", justifyContent: "space-between",  alignItems: "center",}} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <span style={{flex: 1, textAlign: "left"}}>{option==""? "Filter By Catergory" : option}</span> <span style={{flex: 1, textAlign: "right"}}>|</span>
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button" onClick={()=>{handle("sofa")}}>Sofa</button></li>
    <li><button className="dropdown-item" type="button" onClick={()=>{handle("watch")}}>Watch</button></li>
    <li><button className="dropdown-item" type="button" onClick={()=>{handle("chair")}}>Chair</button></li>
    <li><button className="dropdown-item" type="button" onClick={()=>{handle("mobile")}}>Mobile</button></li>
    <li><button className="dropdown-item" type="button" onClick={()=>{handle("wireless")}}>Wireless</button></li>
  </ul>
</div>
  
  <div className='col-9'>
<input name="search" onChange={(event)=>searchfun(event)} style={{height:"40px",borderRadius:"20px",borderWidth:"0px",width:"46vw",marginLeft:"30vh",paddingLeft:"20px",backgroundColor:"#e1e4e8"}} placeholder='Search...'  type='text'/>
<FaSearch style={{position:"relative",right:"35px",bottom:"3px"}}/>
</div>
</div>  

<div className='row' style={{marginLeft:"60px"}}>
  {       
          data.length>0 ?  data.map((ele)=>(
<div key={ele.id} className="card col-lg-4  m-2 shadow-sm border-0" style={{width: "25vw", padding: "10px" }} >
                  <Link to={`/productdetails/${ele.id}`} style={{textDecoration:"none",}}>
                    <img style={{ width: "15vw", height: "30vh" ,marginLeft:"40px"}} src={ele.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h3 style={{color:"black"}}>{ele.productName}</h3>
                      <div>
                        <div className="d-flex">
                          {
                          [1,2,3,4,5].map((ele) => (
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

              )) : <h1 style={{textAlign:"center",marginTop:"100px"}}>Product Not Found !!</h1>
}
</div>




</div>

    </>
  )
}

export default Shop