import React from 'react';
import { options } from '../data';
function Options() {
    return (  
        <div className='Option-Main-Container'>
            <h3>Consumer Service's</h3>
            
            <div className='Option-Content'>
                {options.map((value,index)=>{
                    return(
                        <div key={index}>
                            <img src={`${value.image}`}></img>
                            <h4>{value.title}</h4>
                            <p>{value.description}</p>
                        </div>
                    )

                })}
            </div>
        </div>
    );
}

export default Options;