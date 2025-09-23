import React from "react";
import { useState,useEffect } from "react";
const UseEffect = ()=>{
    const [x,setx] = useState(0);
    useEffect(()=>{
          console.log("Executed....")
    },[x])
    return(
    <>
    <form>
        <div>
          <label>First Name : </label>
          <input type="text" />
        </div>
        <div>
          <label>Last Name : </label>
          <input type="text" />
        </div>
        <div>
          <label>Email : </label>
          <input type="email" />
        </div>
      </form>
     <button onClick={() => setx(x + 1)}>Click Me</button>

      {x}
    </>
);
}
export default UseEffect;