import React from 'react'
import {PropTypes} from 'prop-types';

export default function Boton({nombre, color, onClick}) {
  return (
    <button style={{background: color}} className="btn" onClick={onClick}>
        {nombre}
    </button>
  )
}
Boton.defaultProps={
  nombre: 'Boton',
  color: 'steelblue',
}
Boton.propTypes = {
  color: PropTypes.string,
  nombre: PropTypes.string,
  onClick: PropTypes.func,
}
