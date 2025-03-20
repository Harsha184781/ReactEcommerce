import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { products } from "../products";
import Navbar from "./Navbar";
import table from "../assets/Images/table.jpg"
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Foot from "./Foot";
import { add } from './CartSlice';
import { useDispatch } from 'react-redux';



//This is the product details page,i got the data from products and i got the id by passing in the file path after using params i am geting 
// the id so by using id we are filtering the data and by the data of object we are making it rendering dynamically 
// i having description adn reviews so these are got from object of data, and u may like i created by filtering based on category


const ProductD = () => {

    const dispatch = useDispatch()
    const notify = () => toast.success("Product has been added to Cart");
    const [product, SetProduct] = useState({})
    const [reviews, SetReview] = useState(0)
    const [matter,Setmatter]=useState("desc")
    const [quantity,Setquantity] = useState(1)
    const[Filtproducts,SetFiltproducts]=useState([])

    const { id } = useParams()
  
     
      const addbtn = (ele)=>{
        notify()
        dispatch(add(ele))
    
      }


    useEffect(() => {
       window.scrollTo(0, 0);
        const [prod] = products.filter(ele => ele.id == id)
        console.log(prod)
        SetProduct(prod)
        SetReview(prod.reviews.length)
        console.log(product)
        SetFiltproducts( (products.filter(ele => ele.category==prod.category && ele.productName != prod.productName)));
    }, [id])
    const arr = [1,2,3,4,5]


    const handledes=(matt)=>{
       Setmatter(matt)
    }



    return (
        <>

            <Navbar />

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

            {
                product != {} ?
                    <div>
                        <h1 style={{ color: "white", position: "relative", bottom: "163px", textAlign: "center" }}>{product.productName}</h1>
                    </div>
                    : ""}

            <div className="container">
                <div className="row mt-4 mb-5">

               <div className="col-6">
                <img style={{height:"70vh",width:"35vw"}} src={product.imgUrl}/>

               </div>
            <div className="col-6">
               <h1>{product.productName}</h1>

               <div className="pt-4 d-flex">

                 <div className="d-flex">
                    {
                      arr.map((ele)=>(
                       <p key = {ele} className='ps-2' style={{color:"gold", fontSize:"18px"}}><FaStar/></p>
                      ))
                    }
                   
               </div>
               <p style={{marginLeft:"70px",fontSize:"18px",paddingTop:"2px"}}>{product.avgRating} ratings</p>
               </div>
               
              <div className="d-flex mt-4">
                   <h2>$ {product.price}</h2>
                   <p style={{marginLeft:"54px",fontSize:"18px",paddingTop:"7px"}}>Category: {product.category}</p>
              </div>
              
                <p className=" mt-4">{product.shortDesc}</p>

                 <input value={quantity} readOnly className=" mt-4 d-block" type="number" style={{height:"36px",width:"88px",borderRadius:"6px",borderWidth:"2px", paddingLeft:"14px"}}/>

                 <button className="mt-4" style={{backgroundColor:"darkblue",color:"white", height:"50px",width:"120px",borderRadius:"6px",fontSize:"17px"}} onClick={()=>addbtn(product)}>Add To Cart</button>
                 <ToastContainer />
            </div>
            {
            reviews != 0 ?
                 <p style={{marginTop:"100px",fontWeight:"500",cursor:"pointer",marginBottom:"0px"}} ><span onClick={()=>handledes("desc")} style={{color: matter ==="desc" ? "black" : "grey" }}>Description</span> <span onClick={()=>handledes("rev")} style={{paddingLeft:"10px",color: matter ==="rev" ? "black" : "grey" }}>Reviews({product.reviews.length})</span></p>
                 : ""}
                <div>
                  {matter==="desc" ? <p className="pt-4">{product.description}</p> : 
                  product.reviews.map((ele,i)=>(
                    <div className="pt-4" key={i}>
                   <p style={{marginBottom:"0px",padding:"2px"}}>Jhon Doe</p>
                   <p style={{color:"gold" ,marginBottom:"0px", padding:"2px"}}>{ele.rating} (rating)</p>
                   <p style={{marginBottom:"0px", padding:"2px"}}>{ele.text}</p>
                   </div>
                  ))
                   }
                </div>

                 <h4 style={{marginTop:"150px"}}>You might also like</h4>
                
                 </div>   
                
                    

                <div className="row ms-5">
                 {
                  Filtproducts.map((ele)=>(
                    <div  key={ele.id} className="card col-lg-4  m-2 shadow-sm border-0" style={{width:"25vw",padding:"10px",}} >
          <Link to={`/productdetails/${ele.id}`} style={{textDecoration:"none",color:"black"}}>        
      <img style={{width:"22vw", height:"50vh"}} src={ele.imgUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 >{ele.productName}</h3>
       <div>
        <div className="d-flex">
        {
          arr.map((ele)=>(
           <p key={ele} className='ps-1' style={{color:"gold", fontSize:"20px"}}><FaStar/></p>
          ))
        }
        </div>
    <div className='d-flex justify-content-between'>
        <h3 className='p-2'>{`$ ${ele.price}`}</h3>
        
       
        </div>
    
    
       </div>
      </div>
      </Link>
      <button style={{border:"none", backgroundColor:"white", position:"absolute", left:"300px",bottom:"40px"}} onClick={()=>addbtn(ele)}><CiCirclePlus style={{fontSize:"50px"}} /></button>
      <ToastContainer />
    </div>
    
                   ))
            }
            </div>
            </div>    


                 <Foot/>
        </>
    )


}

export default ProductD