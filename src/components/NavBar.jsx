import React, { useState } from 'react';
import '../styles/NavBar.css';

function NavBar() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className="Nav-Main-Conatiner">
            <div className='nav-data'>
            <nav>
                <h1>
                    <span>M</span>ytalorzone
                </h1>
                <div className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </div>
                <ul className={menuActive ? 'active' : ''}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/traditional">Traditional</a></li>
                    <li><a href="/western">Western</a></li>
                    <li><a href="/trendy">Trendy</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/signup">SignIn</a></li>
                </ul>
            </nav>
            </div>
        </div>
    );
}

export default NavBar;
