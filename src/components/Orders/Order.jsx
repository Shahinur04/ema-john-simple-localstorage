import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import cartProductLoader from "../../Loaders/CartProducts";
import ReviewItem from "../RivewItem/ReviewItem";
import './order.css'
import { removeFromDb } from "../../utilities/fakedb";

const Order = () => {
    const savedCart=useLoaderData();
    const [cart,setCart]=useState(savedCart);
    
    
    const handleRemoveFromCart=(id)=>{
      const reaming=cart.filter(product=>product.id !==id);
      setCart(reaming);
      removeFromDb(id)
    }
   
  return (
    <div className="shop-container">
      <div className="review-container">
        {
          cart.map(product=><ReviewItem 
            key={product.id} 
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
