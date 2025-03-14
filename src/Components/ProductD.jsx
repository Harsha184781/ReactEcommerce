import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { products } from "../products";
import Navbar from "./Navbar";
import table from "../assets/Images/table.jpg"
import { FaStar } from "react-icons/fa";

const ProductD = () => {

    const [product, SetProduct] = useState({})
    const [reviews, SetReview] = useState(0)

    const { id } = useParams()

    useEffect(() => {
        const [prod] = products.filter(ele => ele.id == id)
        console.log(prod)
        SetProduct(prod)
      
        console.log(product)
    }, [])
    const arr = [1,2,3,4,5]



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
                        <h1 style={{ color: "white", position: "relative", bottom: "160px", textAlign: "center" }}>{product.productName}</h1>
                    </div>
                    : ""}

            <div className="container">
                <div className="row mt-4 mb-5">

               <div className="col-6">
                <img src={product.imgUrl}/>

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

                 <input value="1" className=" mt-4 d-block" type="text" style={{height:"36px",width:"88px",borderRadius:"6px",borderWidth:"2px", paddingLeft:"14px"}}/>

                 <button className="mt-4" style={{backgroundColor:"darkblue",color:"white", height:"50px",width:"120px",borderRadius:"6px",fontSize:"17px"}}>Add To Cart</button>
            </div>
            {
            reviews != 0 ?
                 <p style={{marginTop:"100px",fontWeight:"500",cursor:"pointer"}} ><span>Description</span> <span style={{padding:"20px",color:"grey"}}>Reviews({product.reviews.length})</span></p>
                 : ""}
                
                 </div>   
                 </div>
        </>
    )


}

export default ProductD