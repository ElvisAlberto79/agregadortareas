import React from 'react';
import PropTypes from 'prop-types';
import Boton from './Boton';

const Cabecera = ({titulo}) => {
  const onClick=()=>{
    console.log("Click")
  }
  return (

    <header><h1>{titulo}</h1>
    <Boton nombre="Agregar" color = "green" onClick={onClick}/>
    <Boton nombre="Quitar" color = "red" onClick={onClick}/>
    <Boton nombre="Modificar" color = "blue" onClick={onClick}/>
    </header>
  )
}

Cabecera.defaultProps={
    titulo: 'Poner Titulo'
}

Cabecera.propTypes = {
  titulo: PropTypes.string,
}
export default Cabecera;
