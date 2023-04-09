import React from "react";
import "./reviewItem.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product,handleRemoveFromCart }) => {
  const { id, name, price, img, quantity, shipping } = product;
  return (
    <div className="review-item">
      <div className="review-info">
        <img src={img} alt="" />
        <div>
          <p className="name">{name}</p>
          <p>
            Price:<span className="price">${price}</span>
          </p>
          <p>
            Quantity:<span className="price">{quantity}</span>{" "}
          </p>
        </div>
      </div>
        <button onClick={()=>handleRemoveFromCart(id)} className="btn-del">
          <FontAwesomeIcon icon={faTrash} />
        </button>
    </div>
  );
};

export default ReviewItem;
