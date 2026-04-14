import { useState } from 'react'
import './App.css'
import TaskForm from './TaskForm/TaskForm'
import TaskItem from './TaskItem/TaskItem'
import { useEffect } from 'react'

function App() {
  
const [tasks, setTasks] = useState (() => {
  const savedTasks = localStorage.getItem('tareas');
  return savedTasks ? JSON.parse(savedTasks) : [] 
})

useEffect (() => {
  localStorage.setItem('tareas', JSON.stringify(tasks));
}, [tasks])

  let addTask = (tarea) => {
    setTasks([...tasks, newTask]);
  }

  let deleteTask = (tarea) => {
      setTasks(tasks.filter(el => el.nombreTarea !== tarea.nombreTarea));
    }

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
