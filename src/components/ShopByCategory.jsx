import React from 'react';
import { byCategory } from '../data'
import '../styles/ShopByCategory.css'
function ShopByCategory() {
    return (
        <div className='Category-main-container'>
            <div className='Category-content'>
                <h3>Shop By Category  </h3>
                <div className='outerCard'>
                    {byCategory.map((value, index) => {
                        return (
                            <div key={index} className='innerCard'>
                                <img src={`${value.image}`}></img>
                                <div className='innerCard-deatils'>
                                    <h2>{value.title}</h2>
                                    <p>{value.discount}</p>
                                </div>
                            </div>)
                        })}
                </div>
            </div>
        </div>
    );
}

export default ShopByCategory;