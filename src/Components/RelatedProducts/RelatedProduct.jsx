import React from 'react';
import data_product from '../assets/Property.js';
import Item from '../Item/Item.jsx'; 
import './Relatedproduct.css';

const  RelatedProduct= () => {
    return (
        <div className='relatedproduct'>
        <h1>Related Products</h1>
        <hr/>
       <div className='relatedproduct-colections'>
                {data_product.map((item,i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
                    })}
                    </div>
   </div>
    );
};

export default RelatedProduct;