import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import cartProductLoader from "../../Loaders/CartProducts";
import ReviewItem from "../RivewItem/ReviewItem";
import './order.css'

const Order = () => {
    const cart=useLoaderData();
    console.log(cart);
    // return products;
  return (
    <div className="shop-container">
      <div className="review-container">
        {
          cart.map(product=><ReviewItem key={product.id} product={product}></ReviewItem>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
