import { useState } from 'react';

export default function AddTarea( {onAdd} ) {
    
    const [text, setText]= useState('');
    const [day, setDay]= useState('');
    const [reminder, setReminder]= useState(false);

const onSubmit= (e)=>{
    e.preventDefault();
    if (!text){
        alert("Por favor ingresar un texto para la tarea.");
        return
    }
    onAdd({text, day, reminder});
    setText('');
    setDay('');
    setReminder(false);
}
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Tarea</label>
            <input 
                type="text" 
                placeholder="Tarea a agregar"
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
        </div>
        <div className="form-control">
            <label>dia y hora</label>
            <input 
                type="text" 
                placeholder="dia y hora"
                value = {day}
                onChange={(e)=>setDay(e.target.value)}
            />
        </div>
        <div className="form-control form-control-check">
            <label>Recordatorio</label>
            <input 
                type="checkbox" 
                checked={reminder}
                value={reminder}
                onChange={(e)=>setReminder(e.currentTarget.checked)}
            />
        </div>
        <input className ="btn btn-block btn-success" type="submit" value="Guardar Tarea" />
    </form>
  )
}
