import React from 'react'
import './TaskForm.css'
import { useState } from 'react'

const TaskForm = ({ onAddTask }) => {
    const [nombreTarea, setNombreTarea] = useState('');
    
    let handleSubmit = () => { 
      onAddTask({ nombreTarea: nombreTarea }); 
      setNombreTarea('');
    }
  
    
  return (
    <>
        <div className='container'>
            <input type='text' className='board' placeholder='Nombre de la tarea' value={nombreTarea} onChange={(e) => setNombreTarea(e.target.value)} />
            <button className='add-btn' onClick={handleSubmit}>Agregar</button>
        </div>
    </>
  )
}
export default TaskForm