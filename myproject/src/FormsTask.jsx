import React from "react";
import { useState } from "react";


const FormsTask = () =>{
  const [Data, setData] = useState([]);
  let userData = { firstname: "", lastname: "", email: "" };

  const Fun = () => {
    setData([...Data, userData]);
    userData = { firstname: "", lastname: "", email: "" };
  };

  const GetData = (key, event) => {
    userData[key] = event.target.value;
  };

  return (
    <>
      <form>
        <div>
          <label>First Name : </label>
          <input type="text" onChange={(e) => GetData("firstname", e)} />
        </div>
        <div>
          <label>Last Name : </label>
          <input type="text" onChange={(e) => GetData("lastname", e)} />
        </div>
        <div>
          <label>Email : </label>
          <input type="email" onChange={(e) => GetData("email", e)} />
        </div>
      </form>
      <button onClick={Fun}>Add Data</button>
{/* tsgdtrujyguikuo */}
      <div className="parent">
        {Data.map((ele, index) => (
          <div key={index} className="child">
            <div>First Name : {ele.firstname}</div>
            <div>Last Name : {ele.lastname}</div>
            <div>Email : {ele.email}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FormsTask;
