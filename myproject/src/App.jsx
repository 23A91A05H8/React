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



// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Page1 from "./Page1";
// import Page2 from "./Page2";
// import Store from "./Store";
// function App() {
//   const [Count ,setCount] = useState(0)
//   return (
//     <>
//     <Store.Provider value={{Count,setCount}}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Page1 />} />
//           <Route path="/page2" element={<Page2 />} />
//         </Routes>
//       </BrowserRouter>
//     </Store.Provider>
//     </>
//   );
// }

// export default App;




// import React, { useState } from "react";
// import "./App.css";

// export default function App() {
//   const [view, setView] = useState("none");
//   const [data, setData] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     brand: "",
//     price: "",
//     description: "",
//     image: "",
//   });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setForm({ ...form, image: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleUpload = (e) => {
//     e.preventDefault();
//     if (!form.name || !form.brand || !form.price) {
//       setMessage("Please fill all required fields!");
//       return;
//     }
//     setData([...data, form]);
//     setForm({ name: "", brand: "", price: "", description: "", image: "" });
//     setMessage("Details are updated!");
//   };

//   const handleClear = () => {
//     setForm({ name: "", brand: "", price: "", description: "", image: "" });
//     setMessage("Form cleared!");
//   };

//   return (
//     <div className="app-container">
//       <header className="header">
//         <div className="buttons">
//           <button
//             className={view === "add" ? "active" : ""}
//             onClick={() => setView("add")}
//           >
//             Add Data
//           </button>
//           <button
//             className={view === "view" ? "active" : ""}
//             onClick={() => setView("view")}
//           >
//             View Data
//           </button>
//         </div>
//       </header>

//       {message && <p className="message">{message}</p>}

//       {view === "add" && (
//         <div className="form-container">
//           <form onSubmit={handleUpload}>
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Enter product name"
//               required
//             />

//             <label>Brand:</label>
//             <input
//               type="text"
//               name="brand"
//               value={form.brand}
//               onChange={handleChange}
//               placeholder="Enter brand name"
//               required
//             />

//             <label>Price:</label>
//             <input
//               type="number"
//               name="price"
//               value={form.price}
//               onChange={handleChange}
//               placeholder="Enter price"
//               required
//             />

//             <label>Description:</label>
//             <textarea
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               placeholder="Enter description"
//               rows="3"
//             ></textarea>

//             <label>Image:</label>
//             <input type="file" accept="image/*" onChange={handleImage} />

//             <div className="form-buttons">
//               <button type="submit" className="upload">
//                 Upload
//               </button>
//               <button type="button" onClick={handleClear} className="clear">
//                 Clear
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {view === "view" && (
//         <div className="cards-container">
//           {data.length === 0 ? (
//             <p className="no-data">No data available.</p>
//           ) : (
//             data.map((item, index) => (
//               <div className="card" key={index}>
//                 {item.image && (
//                   <img src={item.image} alt={item.name} className="card-img" />
//                 )}
//                 <h3>{item.brand}</h3>
//                 <p>₹{item.price}</p>
//               </div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// }




import React from "react";
import Dashboard from "./Dashboard";

function App() {
  return <Dashboard />;
}

export default App;
