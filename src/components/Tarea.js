import {FaTimes} from 'react-icons/fa';

export default function Tarea({ tarea, onDelete, onToggle}) {
  return (
    <div className={`task ${tarea.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(tarea.id)}>
        <h3>{tarea.text} 
            <FaTimes 
                style={{color: 'red', cursor: 'pointer'}} 
                onClick={()=>onDelete(tarea.id)} />
        </h3>
        <p>{tarea.day}</p>
    </div>
    
  )
}
