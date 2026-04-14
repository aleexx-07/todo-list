import { useState } from 'react'
import './App.css'
import TaskForm from './TaskForm/TaskForm'
import TaskItem from './TaskItem/TaskItem'
import { useEffect } from 'react'

function App() {
  
let [tasks, setTasks] = useState ([]);

useEffect (() => {
  const tasks = localStorage.getItem('tasks');
  if (tasks) {
    setTasks(JSON.parse(tasks));
  }
}, [])

  let addTask = (newTask) => {
    const newTasks = ([...tasks, newTask]);
    setTasks(newTasks)
    localStorage.setItem('tasks',JSON.stringify(newTasks))
  }

  let deleteTask = (task) => {
    let newTasks = tasks.filter(el => el.nombreTarea !== task.nombreTarea);
    setTasks(newTasks)
    localStorage.setItem("tasks",JSON.stringify(newTasks))
    }

  return (
    <>
      <h1>Lista de Tareas</h1>
      {tasks.map((taskItem) => <TaskItem key={taskItem.nombreTarea} nombreTarea={taskItem.nombreTarea} onDelete={() => deleteTask(taskItem)}/>) }
      <p className='add-task'>Agregar nueva tarea...</p>
      <TaskForm onAddTask={addTask} />
    </>
  )
}

export default App
