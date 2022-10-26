import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContextProvider";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask} =  useContext(TaskContext) 

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">

    <form onSubmit={handleSubmit} className="bg-slate-600 p-10 mb-4">
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        placeholder="escribe texto"
        type="text"
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <textarea
        placeholder="escribe descripcion"
        value={description}
        className="bg-slate-300 p-3 w-full mb-2"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button  className="bg-indigo-500 px-3 py-1 text-white">guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
