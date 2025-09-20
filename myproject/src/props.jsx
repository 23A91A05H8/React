import React from "react";
import "./props.css";
const Cards = (Props) => {
  console.log(Props.Data);
  return (
    <>
      
        <div className="card">
          <div className="logo">{Props.Data.image}</div>
          <div className="price">Price : {Props.Data.price}</div>
          <div className="brand">Brand : {Props.Data.brand}</div>
        </div>
    </>
  );
};

export default Cards;