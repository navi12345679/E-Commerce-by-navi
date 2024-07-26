import React from 'react';
import './Footer.css'
import footer from '../assets/logo.png';

import icon from '../assets/logo4.png';

const Footer = () => {
    return (

        <div className='footer'>
           <div className='footer-logo'>
            <img src={footer} alt=""/>
            <p>SHOPPER</p>
           </div> 
          <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className='footer-social-icons'>
            <div className='social-icons-container'>
                <img src={icon} alt= " "/>
            </div>
            
            <div className='footer-copyright'><hr/>
            <p>Copyright @2024 all rights reserved</p></div>
          </div>
        </div>
    );
};

export default Footer;