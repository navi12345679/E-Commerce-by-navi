import React, { useContext } from 'react';
import './Productdisplay.css';
import { ShopContext } from '../../Context/ShopContext';
import star from '../assets/star.png';
import star1 from '../assets/star1.png';

const ProductDisplay = (props) => {
     const {product}= props;
            const {addTocart} =useContext(ShopContext);
    return (
        <div className='productdisplay'>
           <div className='productdisplay-left'>
           <div className='productdisplay-img-list'>
            <img src= {product.image}alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
           </div>
           <div className='productdisplay-img'>
            <img className='productdisplay-main-img' src={product.image} alt=''/>
           </div>

           </div>
           <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star} alt=''/>
            <img src={star1} alt=''/>
             <p>(122)</p>
            </div>
           <div className='productdisplay-right-prices'>
           <div className='productdisplay-right-price-old'>${product.old_price}</div>
           <div className='productdisplay-right-price-new'>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-sizes'>
            <h1>Select sizes</h1>
            <div className='productdisplay-right-size'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
            </div>
            </div>
            <button onClick={()=>{addTocart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'> <span>Category: </span> Men , Shirt ,Formal wear</p>
            <p className='productdisplay-right-category'> <span>Tags: </span> Modern,latest</p>
           </div>
        </div>
    );
};

export default ProductDisplay;