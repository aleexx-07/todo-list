import React from 'react'
import './TaskItem.css'



function TaskItem({ nombreTarea, onDelete }) {
  
  return (
    <div className='container-task-item'>
      <input type="checkbox" />
      <p className='task-name'>{nombreTarea}</p>

    <button className='btn-eliminar' onClick={() => onDelete({ nombreTarea })}>
        <img src="../public/papelera-transparente.png" className="img-cerrada"/>
        <img src="../public/papelera-negra.png" className="img-abierta"/>
      </button>
    </div>
  )
}

export default TaskItem