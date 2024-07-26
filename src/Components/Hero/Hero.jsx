import React from 'react';
import './Hero.css';
{/*import hand_icon from '../assets/hand1.png'; */}
import ram from '../assets/ram.png';
import arrow from '../assets/arrow.png';
const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>New arrivals only</h2>
                <div>
                    <div className='hand-icon'>
                        <p>New</p>
                    {/*   <img src={hand_icon}  alt=""/>  */}
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
<div className='hero-latest-btn'>
    <div>Latest Collection</div>
    <img src={arrow} alt=''/>

</div>
            </div>
            <div className='hero-right'>
            <img src={ram} alt=""/>
            </div>     
        </div>
    );
};

export default Hero;