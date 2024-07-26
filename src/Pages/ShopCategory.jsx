import React, { useContext } from 'react';
import './CSS/shopcategory.css';
import { ShopContext } from '../Context/ShopContext.jsx';
import dropdown_icon from '../Components/assets/dropdownicon.png';
import Item from '../Components/Item/Item.jsx';

const ShopCategory = (props) => {
  const {all_products} =useContext(ShopContext);
    return (
        <div className='shop-categary'>
            <img  className='banner' src={props.banner}  alt=" "/>
            <div className='shop-index'>
                <p>
                    <span>Showing 1-12 </span>out of 36 products
                </p> 
                <div className='shopcategory-sort'>
                    Sort by <img src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className='shopcategory-products'>
                {all_products.map((item,i)=>{
                if(props.category===item.category){
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                
            }
        else {
            return null;
        }
        } )}
   </div>
 </div>
    );
};

export default ShopCategory;