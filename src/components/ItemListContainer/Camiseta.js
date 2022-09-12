import React from 'react'
import './Camiseta.css'

const Camiseta = ({titulo, precio, imagen, descripcion, }) => {
  return (
    <>
      <div className="camiseta">
        <h2>Saludos en diferentes idiomas:</h2>
        <h3>{titulo}</h3>
        <h4>{precio}</h4>
        <h4>{imagen}</h4>
        <h4>{descripcion}</h4>
      </div>
    </>
  )
}

export default Camiseta;
