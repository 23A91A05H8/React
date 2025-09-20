import { useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState([1, 2, 3]);

  const deletes = (deleteindex) => {
    setdata(data.filter((card) => card !== deleteindex));
  };

  return (
    <div className="parent">
      {data.map((card) => (
        <div className="child">
          <h2>{card}</h2>
          <button onClick={() => deletes(card)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
