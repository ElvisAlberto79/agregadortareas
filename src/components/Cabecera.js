import React from 'react';
import PropTypes from 'prop-types';
import Boton from './Boton';

const Cabecera = ({titulo, onAdd, showAdd}) => {
  
  return (

    <header><h1>{titulo}</h1>
    <Boton nombre={showAdd ? 'Cerrar' : 'Agregar'} color = {showAdd ? 'red' : 'green'} onClick={onAdd}/>
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
