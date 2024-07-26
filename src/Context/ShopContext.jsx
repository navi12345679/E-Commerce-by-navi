import React, {createContext, useState} from "react";
import all_products from "../Components/assets/all_products.js";
import CartItems from "../Components/CartItems/CartItems.jsx";

export  const  ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart ={};
    for(let index = 0; index < all_products.length;index++){
        cart[index]=0;
}
return cart;
} 
const ShopContextProvider = (props) => {
    const [cartitem,setCartitem] = useState(getDefaultCart);
    
       const addTocart = (itemId) =>{
         setCartitem((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
         console.log(cartitem);
         
       }
       const removeFromcart = (itemId) =>{
        setCartitem((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
        
      }
      
      const getTotalCartAmount = () => {
        let totalAmount= 0;
        for(const item in cartitem){
          if(cartitem[item] > 0){
            let iteminfo= all_products.find((product) => product.id===Number(item));
            if (iteminfo){
              totalAmount += cartitem[item]*iteminfo.new_price;
            }
            }   
        }
        console.log(totalAmount);
        return totalAmount;
       }

       const getTotalCartitems = () => {
        let totalitems = 0;
    
        for(const item in cartitem)
          {
          if(cartitem[item] > 0){
            totalitems += cartitem[item];
          }
          
        }
        console.log(totalitems);
        return totalitems;
   }
  
   

      const contextValue = {getTotalCartitems,getTotalCartAmount,all_products,cartitem,addTocart,removeFromcart};

    return(
      <ShopContext.Provider value={contextValue}>
                  {props.children}
       </ShopContext.Provider>
    )
}
export default ShopContextProvider;