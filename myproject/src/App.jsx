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
// import UseEffect from "./UseEffect";
// function App() {
//   return (
//     <>
//       <h1>Welcome</h1>
//       <UseEffect />
//     </>
//   );
// }

// export default App

// import "./App.css";
// import SearchCard from "./SearchCard";
// function App() {
//   return (
//     <>
//       <SearchCard />
//     </>
//   );
// }

// export default App

// import "./App.css";
// import task_us_uf from "./task_us_uf";
// function App(){
//   return (
//     <>
//     <h1>Welcome</h1>
//     <task_us_uf />
//     </>
//   );
// }


// import React, { useState, useEffect } from "react";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const [editIndex, setEditIndex] = useState(null);

//   // Load tasks from localStorage (optional persistence)
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("tasks"));
//     if (saved) setTasks(saved);
//   }, []);

//   // Save tasks to localStorage whenever tasks change
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   // Add or update task
//   const handleAddOrUpdate = () => {
//     if (!newTask.trim()) return;

//     if (editIndex !== null) {
//       // Update existing task
//       const updated = [...tasks];
//       updated[editIndex].text = newTask;
//       setTasks(updated);
//       setEditIndex(null);
//     } else {
//       // Add new task
//       setTasks([...tasks, { text: newTask, completed: false }]);
//     }

//     setNewTask("");
//   };

//   // Toggle complete/incomplete
//   const toggleComplete = (index) => {
//     const updated = [...tasks];
//     updated[index].completed = !updated[index].completed;
//     setTasks(updated);
//   };

//   // Delete task
//   const deleteTask = (index) => {
//     const updated = tasks.filter((_, i) => i !== index);
//     setTasks(updated);
//   };

//   // Edit task
//   const editTask = (index) => {
//     setNewTask(tasks[index].text);
//     setEditIndex(index);
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-gray-100 rounded-xl shadow-lg">
//       <h1 className="text-2xl font-bold mb-4">Todo List</h1>

//       {/* Input and Add/Update button */}
//       <div className="flex mb-4">
//         <input
//           type="text"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           placeholder="Enter task..."
//           className="flex-1 border p-2 rounded"
//         />
//         <button
//           onClick={handleAddOrUpdate}
//           className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           {editIndex !== null ? "Update" : "Add"}
//         </button>
//       </div>

//       {/* Task list */}
//       <ul>
//         {tasks.map((task, index) => (
//           <li
//             key={index}
//             className="flex items-center justify-between bg-white p-2 mb-2 rounded shadow"
//           >
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={task.completed}
//                 onChange={() => toggleComplete(index)}
//                 className="mr-2"
//               />
//               <span
//                 className={task.completed ? "line-through text-gray-500" : ""}
//               >
//                 {task.text}
//               </span>
//             </div>
//             <div>
//               <button
//                 onClick={() => editTask(index)}
//                 className="mr-2 text-yellow-500"
//               >
//                 ✏
//               </button>
//               <button
//                 onClick={() => deleteTask(index)}
//                 className="text-red-500"
//               >
//                 🗑
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Store from "./Store";
function App() {
  const [Count ,setCount] = useState(0)
  return (
    <>
    <Store.Provider value={{Count,setCount}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </Store.Provider>
    </>
  );
}

export default App;