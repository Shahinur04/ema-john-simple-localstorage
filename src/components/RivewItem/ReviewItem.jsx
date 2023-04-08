import React from "react";
import "./reviewItem.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product }) => {
  const { id, name, price, img, quantity, shipping } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="twoThing">
        <div>
          <p className="name">{name}</p>
          <p>
            Price:<span className="price">${price}</span>
          </p>
          <p>Quantity:<span className="price">{quantity}</span> </p>
        </div>
        <button className="btn-del">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
