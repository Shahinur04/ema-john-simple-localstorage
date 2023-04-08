import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const Order = () => {
    const products=useLoaderData();
    // console.log(products);
    // return products;
  return (
    <div className="shop-container">
      <div className="products-container">
        <h1>this section is coming to us{products.length}</h1>
      </div>
      <div className="cart-container">
        <Cart cart={[]}></Cart>
      </div>
    </div>
  );
};

export default Order;
