import React from 'react';
import './Offers.css';
import ram1 from '../assets/ram1.png';

const Offers = () => {
    return (
        <div className='offers'>
            <div className='offers-left'>
                <h1>Exclusive</h1>
                <h1>offers for you</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className='offers-right'>
            <img src={ram1} alt="" />
            </div>
        </div>
    );
};

export default Offers;