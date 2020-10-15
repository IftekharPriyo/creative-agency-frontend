import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from '../../../images/carousel1.png'
import carousel2 from '../../../images/carousel2.png'
import carousel3 from '../../../images/carousel3.png'
import carousel4 from '../../../images/carousel4.png'
import carousel5 from '../../../images/carousel5.png'
import './Works.css'

const Works = () => {
    const settings = {
      autoplay: false,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        
        speed: 60,

        // cssEase: "linear"
      };
    return (
        <div className="works" >
          <h2>Here are some of our <span style={{color:'#7AB259'}} >works</span></h2>
          <Slider {...settings}>
            <div>
              <img src = {carousel1} alt='1'/>
            </div>
            <div>
            <img src = {carousel2} alt='2'/>
            </div>
            <div>
            <img src = {carousel3} alt='3'/>
            </div>
            <div>
            <img src = {carousel4} alt='4'/>
            </div>
            <div>
            <img src = {carousel5} alt='5'/>
            </div>
          </Slider>
        </div>
      );
};

export default Works;