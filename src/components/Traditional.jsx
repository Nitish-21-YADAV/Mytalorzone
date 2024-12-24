import React from 'react';
import Slider from "react-slick";
import '../styles/Traditional.css'
import { tradition, western } from '../data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Traditional() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 956, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            },
            {
                breakpoint: 808, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            },
        ],
       
    };

    return (
        <div className='Traditional-Main-Conatiner'>
            <h1>Our Collections</h1>

            <div className='Traditional-content'>
                <div className='Slider-seeting'>
                    <Slider {...settings}>
                        {tradition.slice(0, 7).map((value, index) => {
                            return (
                                <div className='OuterCard' key={index}>
                                    <div className='InnerCard'>
                                        <img className='main-img' src={`${value.image1}`} ></img>
                                        <img className='hover-img' src={`${value.image2}`}></img>
                                        <h2>{value.title}</h2>
                                        <p>{value.about}</p>
                                        <p>Rs {value.price}</p>
                                        <button className="buy-btn">Buy Now</button>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
            <div className='PartyEnd-Main-Conatiner'>
                <img src='src/public/PArtyEnda.avif'></img>
            </div>
            <div className='Trendy-content'>
                <div className='Slider-seeting'>
                    <Slider {...settings}>
                        {western.slice(0, 7).map((value, index) => {
                            return (
                                <div className='OuterCard' key={index}>
                                    <div className='InnerCard'>
                                        <img className='main-img' src={`${value.image1}`} ></img>
                                        <img className='hover-img' src={`${value.image2}`}></img>
                                        <h2>{value.title}</h2>
                                        <p>{value.about}</p>
                                        <p>Rs {value.price}</p>
                                        <button className="buy-btn">Buy Now</button>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
            <button>View More</button>
        </div>
    );
}

export default Traditional;