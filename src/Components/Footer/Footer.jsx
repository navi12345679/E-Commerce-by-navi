import React from 'react';
import './Footer.css'
import footer from '../assets/logo.png';
import Footerinfo from '../Footerinfo/Footerinfo';


const Footer = () => {

    return (

        <div className='footer'>
           <div className='footer-logo'>
            <img src={footer} alt=""/>
            <p>SHOPPER</p>
         </div>
         <Footerinfo/>
          <div className='footer-social-icons'>
            <div className='social-icons-container'>  
            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"  onClick={()=> window.open("https://www.linkedin.com/in/navitha-r-823b39216/"," _blank")} alt= " "/>
            <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" onClick={()=> window.open("https://github.com/navi12345679", "_blank")} alt= " "/>
            <img src="https://freebiehive.com/wp-content/uploads/2023/08/Whatsapp-Business-Logo-PNG-758x473.jpg" onClick={()=> window.open("https://web.whatsapp.com/", "_blank")} alt= " "/>
             </div>
            
            <div className='footer-copyright'><hr/>
            <p>Copyright @2024 all rights reserved</p></div>
          </div>
        </div>
   
    );
};

export default Footer;