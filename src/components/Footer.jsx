import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
function Footer() {
    return (
        <div className='Footer-Main-Contanier'>
            <div className='footer-Left-Component'>
                <div className="footer-left-content">
                <h1>Mytalorzone<br /> <span>By Sahiba</span></h1>
                <p>Mytalorzone Collection Hub,Xyz Road,near Mumbai Central</p>
                <p>+91-93xxxxx342</p>
                </div>
            </div>
            <div className='footer-Right-Component'>
                <div className="top-Categories">
                    <h2>Top-Categories</h2>
                    <Link >Traditional</Link>
                    <Link>Western</Link>
                    <Link>Trendy</Link>
                </div>
                <div className="top-Categories">
                    <h2>Customer Support</h2>
                    <Link>FAQ & Help</Link>
                    <Link>Spport Center</Link>
                    <Link>Shipping & Delivery</Link>
                </div>
                <div className='top-Categories'>
                    <h2>Social Media</h2>
                    <Link>Instagram</Link>
                    <Link>Facebook</Link>
                    <Link>YouTube</Link>
                </div>
            </div>

        </div>
    );
}

export default Footer;