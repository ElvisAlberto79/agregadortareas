import Cabecera from './components/Cabecera';
import Tareas from './components/Tareas';
import AddTarea from './components/AddTarea';
import { useState } from 'react';


function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Cita con el doctor de GAbriel",
        day: "5 de febrero a las 1450 hs",
        reminder: true,
    },
    {
        id: 2,
        text: "Combate cuerpo a cuerpo con la del barrio",
        day: "25 de marzo a las 13:30 hs",
        reminder: false,
    },
    {
        id: 3,
        text: "Ir a buscar el auto para arreglar",
        day: "1 de Enero a las 09:50 hs",
        reminder: true,
    },
    {
        id: 4,
        text: "Coger a la mujer del vecino",
        day: "14 de febrero 12:69 hs",
        reminder: false,
    }
]
)
//AGREGANDO TARREAS
const agregarTarea = (task)=>{
  const id = Math.floor(Math.random()*10000)+1;
  const newTask = {id, ...task};
  setTasks([...tasks, newTask]);
}
//BORRANDO TAREAS
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}
//PONIENDO O NO RECORDATORIO
const toggleReminder = (id)=>{
  setTasks(tasks.map((task)=>task.id === id ? {...task, reminder : !task.reminder}: task))
}

  return (
    <div className="App">
      <Cabecera titulo="Buscador de Tareas" 
        onAdd={()=>setShowAdd(!showAdd)}
        showAdd={showAdd}
      />
      {showAdd && <AddTarea onAdd = {agregarTarea}/>}
      {tasks.length > 0 ? 
        <Tareas tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder} /> 
          : 'No hay tareas para mostrar'}
    </div>
  );
}

export default App;
