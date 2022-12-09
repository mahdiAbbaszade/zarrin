import React from "react";
import "./Product.css";
const CardProduct = ({ src, explain }) => {
  return (
    <div className="container-product">
      <div className="container-img">
        <img src={src} className="img-product" alt="" />
      </div>
      <div className="explain-product">
        <h4>{explain}</h4>
      </div>
    </div>
  );
};

export default CardProduct;
