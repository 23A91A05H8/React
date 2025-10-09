import React, { useState, useEffect } from "react";

const task_us_uf = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Load tasks from localStorage (optional persistence)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add or update task
  const handleAddOrUpdate = () => {
    if (!newTask.trim()) return;

    if (editIndex !== null) {
      // Update existing task
      const updated = [...tasks];
      updated[editIndex].text = newTask;
      setTasks(updated);
      setEditIndex(null);
    } else {
      // Add new task
      setTasks([...tasks, { text: newTask, completed: false }]);
    }

    setNewTask("");
  };

  // Toggle complete/incomplete
  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  // Delete task
  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  // Edit task
  const editTask = (index) => {
    setNewTask(tasks[index].text);
    setEditIndex(index);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-100 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      {/* Input and Add/Update button */}
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task..."
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={handleAddOrUpdate}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {/* Task list */}
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-white p-2 mb-2 rounded shadow"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(index)}
                className="mr-2"
              />
              <span
                className={task.completed ? "line-through text-gray-500" : ""}
              >
                {task.text}
              </span>
            </div>
            <div>
              <button
                onClick={() => editTask(index)}
                className="mr-2 text-yellow-500"
              >
                ✏
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500"
              >
                🗑
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default task_us_uf;