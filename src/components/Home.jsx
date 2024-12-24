import React from 'react';
import NavBar from './NavBar';
import '../styles/Home.css'
import Traditional from './Traditional';
function Home() {
    return ( 
        <div className='Main-Conatiner'>
            <div id="home-page">
                <div id="home-Main-Conatiner">
                    <img src="src/public/New-image3-removebg-preview.png" id="bg-Image1" />
                    <div id="home-Main-content">
                        <h1>Unleash Your Style</h1>
                        <p>Explore a world of fashion that’s bold, beautiful, and uniquely yours. From elegant
                            traditional wear to chic western outfits, we have it all.</p>
                        <button>Shop Now</button>
                    </div>
                    <img src="src/public/New-Bg-Image2.jpg" id="bg-Image2"/>
                </div>
            </div>
        </div>
     );
}

export default Home;