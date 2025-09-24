import React, { useState, useEffect } from "react";
import "./App.css";

const SearchCard = () => {
  const [CompleteData, SetCompleteData] = useState([
    {
      name:"Sita"
    },
    {
      name:"Githa"
    },
    {
      name:"likki"
    },
    {
      name:"Bhavans"
    },
    {
      name:"Bhans"
    }
  ])
 const [x,setX] = useState("");
  useEffect(()=>{
  const filtered = CompleteData.filter((ele) =>
    ele.name.toLowerCase().includes(x)
  );
  setQueryResult(filtered);
  },[x])
const change = (event) => {
   setX(event.target.value);
};

  const [QueryResult,setQueryResult]=useState([CompleteData]);
return (
  <div className="container">
    <input 
      type="text" 
      placeholder="Search..." 
      value={x} 
      onChange={change} 
    />
    <div className="parent">
      {QueryResult.map((ele) => (
        <div className="card">
          {ele.name}
        </div>
      ))}
    </div>
  </div>
);


}

export default SearchCard;