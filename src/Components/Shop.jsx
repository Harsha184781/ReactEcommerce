import React, { useState } from 'react'
import Navbar from './Navbar'
import table from "../assets/Images/table.jpg"
import { FaSearch } from 'react-icons/fa'


const Shop = () => {


  const {} = useState("")
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
  <button style={{backgroundColor:"darkblue",marginLeft:"45px"}} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Filter By Catergory<span style={{paddingLeft:"25px"}}>|</span>
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button">Sofa</button></li>
    <li><button className="dropdown-item" type="button">Watch</button></li>
    <li><button className="dropdown-item" type="button">Chair</button></li>
    <li><button className="dropdown-item" type="button">Mobile</button></li>
    <li><button className="dropdown-item" type="button">Wireless</button></li>
  </ul>
</div>
  
  <div className='col-9'>
<input  style={{height:"40px",borderRadius:"20px",borderWidth:"0px",width:"46vw",marginLeft:"30vh",paddingLeft:"20px",backgroundColor:"#e1e4e8"}} placeholder='Search...'  type='text'/>
<FaSearch style={{position:"relative",right:"35px",bottom:"3px"}}/>
</div>

</div>  

</div>

    </>
  )
}

export default Shop