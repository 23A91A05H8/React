// import React from "react";
// // import Combiningcomponents from "./Combiningcomponents";
// import FunctionComponent from "./FunctionComponent";

// function App() {
//   return (
//     <>
//     <FunctionComponent/>
//     </>
//     // <center>
//     // <form>
//     //   <Combiningcomponents/>
//     // </form>
//     // </center>

//   );
// }

// export default App;
// import { useState } from "react";
// //import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import Myimg from "./assets/react.svg";
// import "./App.css";
// import Cards from "./props";

// function App() {
//   const [count, setCount] = useState(0);
//   const arr = [
//     { image: Myimg, price: 200, brand: "us" },
//     { image: Myimg, price: 1500, brand: "samsumg" },
//     { image: Myimg, price: 50000, brand: "fsd" },
//     { image: Myimg, price: 50, brand: "bingo" },
//   ];

//   return (
//     <>
//       <div className="parent">
//         {arr.map((item) => {
//           return <Cards Data={item} />;
//         })}
//       </div>
//     </>
//   );
// }

// export default App;
// App.jsx
// import React from "react";
// import Component1 from "./Component1" ;
// import Component2 from "./Component2";

// function App() {
//   return (
//     <div>
//       <Component1 />
//        <Component2 />
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [x, setx] = useState(true);

//   const change = () => {
//     if(x==true) setx(false);
//     else setx(true) 
//   };

//   return (
//     <>
//       {x==true ? <h1>Hello</h1> : <h1>Bye</h1>}
//       <button onClick={change}>Change State</button>
//     </>
//   );
// }

// export default App;


// import { useState } from "react";
// import "./App.css";
// function App() {
//   const [x, setx] = useState([1, 2, 3, 4, 5]);
//   const change = () => {
//     // setx([6, 7, 8, 9, 10]); 
//     setx([...x,100])
//   };
//   return (
//   <>
//     {x.map((ele) => (
//       <h1>{ele}</h1>
//     ))}
//     <button onClick={change}>Change</button>
//   </>
// );
// }
// export default App;


// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [x, setx] = useState([1, 2, 3, 4, 5]);
//   const [y, sety] = useState(true);

//   const change = () => {
//     if (y==true) {
//       setx([6, 7, 8, 9, 10]);
//       sety(false)
//     } else {
//       setx([1, 2, 3, 4, 5]); 
//       sety(true)
//     }
//   };

//   return (
//     <>
//       {x.map((ele) => (
//         <h1>{ele}</h1>
//       ))}

//       <button onClick={change}>Change</button>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [data, setdata] = useState([1, 2, 3]);

//   const deletes = (deleteindex) => {
//     setdata(data.filter((card) => card !== deleteindex));
//   };

//   return (
//     <div className="parent">
//       {data.map((card) => (
//         <div className="child">
//           <h2>{card}</h2>
//           <button onClick={() => deletes(card)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


// import FormsTask from "./FormsTask";
import UseEffect from "./UseEffect";
function App() {
  return (
    <>
      <h1>Welcome</h1>
      <UseEffect />
    </>
  );
}

export default App;


