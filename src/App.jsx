import { useState } from 'react'
import './App.css'
import TaskForm from './TaskForm/TaskForm'
import TaskItem from './TaskItem/TaskItem'
import { useEffect } from 'react'

function App() {
  // 🔹 Cargar tareas desde localStorage (seguro)
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");

      if (!savedTasks) return [];

      const parsed = JSON.parse(savedTasks);

      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Error leyendo localStorage:", error);
      return [];
    }
  });

  const [input, setInput] = useState("");

  // 🔹 Añadir tarea
  const addTask = () => {
    if (!input.trim()) return;

    const newTasks = [...tasks, { id: Date.now(), text: input }];

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks)); // 🔥 guardar

    setInput("");
  };

  // 🔹 Eliminar tarea
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks)); // 🔥 guardar
  };

  return (
    <>
      <h1>Lista de Tareas</h1>
      {tasks.map(el => <TaskItem nombreTarea={el.nombreTarea.getItem()} onDelete={deleteTask}/>) }
      <p className='add-task'>Agregar nueva tarea...</p>
      <TaskForm onAddTask={addTask} />
    </>
  )
}

export default App
