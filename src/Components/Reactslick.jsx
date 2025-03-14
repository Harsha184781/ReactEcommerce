import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from '../products';
import sty from "./mo.module.css"

const Reactslick = () => {
    var settings = {
        autoplay:true,
        autoplaySpeed:3000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };



    return (

        
<Slider {...settings}>
               
                    {
                        SliderData && SliderData.map((ele) => (
                            <div className="container-fluid  mt-2" key={ele.id}>
                                <div className="row mt-5 m-5">
                                    <div className="col-7">
                                    <div className = {sty.sli}>
                                        <h1 className='p-2'>{ele.title}</h1>
                                        <p className='p-2'>{ele.desc}</p>
                                        <button className='border-0 p-2'>Visit Collections</button>
                                    </div>
                                    </div>
                                    <div className="col-5">
                                        <img  className={sty.im} src={ele.cover} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
               
            </Slider>

            
    )
}

export default Reactslick