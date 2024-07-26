import React, { useContext } from 'react';
import './Cartitems.css';
import { ShopContext } from '../../Context/ShopContext.jsx';
import remove_icon from '../assets/cross.png';

const CartItems = () => {
  const {getTotalCartAmount,all_products,cartitem,removeFromcart} = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartitem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='cartitems-format'>
                <div className='cartitems-format-main'>
                <img src={e.image} alt='' className='carticon-e-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartitem[e.id]}</button>
                <p>${e.new_price * cartitem[e.id]}</p>
                <img className='carticon-remove-icon' src={remove_icon} onClick={() => removeFromcart(e.id)} alt='' />
              </div>
              <hr/>
            </div>
           </div>
          );
        } 
        return null;
      })}
      <div className='cartitems-down'>
      <div className='cartitems-total'>
        <h1>cart totals</h1>
   <div> 
     <div className='cartitems-total-item'>
      <p>Sub Total</p>
       <p>${getTotalCartAmount()}</p>
       </div>
       <hr />
       <div className='cartitems-total-item'>
       <p>Shipping fee</p>
       <p>Free</p>
      </div>
      <hr />
      <div className='cartitems-total-item'>
       <h3>Total</h3>
       <h3>${getTotalCartAmount()}</h3>
      </div>
 
  <button>Proceed to Checkout</button>   
    </div>
    </div>
    <div className='cartitems-promocode'>
      <p>If you have a promo code, Enter it here</p>
      <div className='cartitems-promobox'>
        <input type="text" id="nameInput" name="name"  placeholder='promocode' />
        <button>Submit</button> 
        </div>
    </div>
</div>
</div>
  );
};

export default CartItems;
