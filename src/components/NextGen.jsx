import React from 'react';
import { useNavigate } from 'react-router-dom';
function NextGen() {
    const navigate=useNavigate();
    return ( 
        <div className='nextGen-Main-Conatiner'>
            <h2>Next-Gen Fashion</h2>
            <div className='nextGen-contents'>
                <img src='/nextGen1.avif' />
                <img src='/nextGen2.avif' />
                <img src='/nextGen3.avif' />
                <img src='/nextGen4.avif' />

            </div>
            <button onClick={()=>navigate('/traditional')}>View More</button>
        </div>
    );
}

export default NextGen;