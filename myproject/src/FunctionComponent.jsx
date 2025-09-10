import React from "react";
import "./FunctionComponent.css";
import Myimage from "./assets/react.svg"; // example import, replace with your image path

const FunctionComponent = () => {
  const Listitems = [
    { image: Myimage, price: 100, Brand: "Aditya" },
    { image: Myimage, price: 100, Brand: "Aditya" },
    { image: Myimage, price: 100, Brand: "Aditya" },
    { image: Myimage, price: 100, Brand: "Aditya" }
  ];

  return (
    <div className="parent">
      {Listitems.map((item) => (
        <div className="card">
          <div className="logo">
            <img src={item.image} alt={item.Brand} />
          </div>
          <div className="info">
            <h3>{item.Brand}</h3>
            <p>Price: ₹{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FunctionComponent;