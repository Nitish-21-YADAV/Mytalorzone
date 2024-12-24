import React from 'react';
import NavBar from '../NavBar';
import '../../styles/TraditionalHome.css'
import Slider from 'react-slick';
import { tradition, traditionalHomeImgae } from '../../data'
import Footer from '../Footer'

function TraditionalHome() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
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
        <div className='TraditionalHome-Main-Container'>
            <NavBar />
            <div className='TraditionalHome-Content'>
                <div className='TraditionalHome-hero'>
                    <Slider {...settings}>
                        {traditionalHomeImgae.map((value, index) => {
                            return (
                                <div key={index} className='Slider-conatiner'>
                                    <img src={`${value.image}`}></img>
                                </div>
                            )
                        })}

                    </Slider>
                </div>
                <div className='TraditionalHomeImages-Cards'>
                    <div className="TraditionalHomeImages-Cards-Details">
                        {tradition.map((value, index) => {
                            return (
                                <div className='TraditionalHomeImages-Cards-OuterCard' key={index}>
                                    <div className='TraditionalHomeImages-Cards-InnerCard'>
                                        <img className='main-img' src={`${value.image1}`} ></img>
                                        <img className='hover-img' src={`${value.image2}`}></img>
                                        <h3>{value.title}</h3>
                                        <p>{value.about}</p>

                                        <p1>Rs {value.price}</p1>
                                        <button className='Cart'>Add to Cart</button>

                                        <button className="buy-btn">Buy Now</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button className='Final-Cart'>My Cart</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TraditionalHome;