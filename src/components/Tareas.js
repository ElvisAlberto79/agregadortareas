import Tarea from './Tarea';
export default function Tareas({ tasks , onDelete, onToggle }) {

  return (
    <div>{tasks.map( (tarea)=>(
    <Tarea key={tarea.id} tarea={tarea} onDelete={onDelete} onToggle={onToggle}/>))}</div>
  )
}
