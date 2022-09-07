import React from "react";
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <div className="ItemListContainer">
            <h2>Saludos en diferentes idiomas:</h2>
            <h3>{props.language}</h3>
            <h4>{props.greeting}</h4>
            <h4>{props.farewell}</h4>
        </div>
    )
}

// -------- MANERA 2 DE USAR PROPS --------

// const ItemListContainer = (greeting, mensaje, otroMensaje, otroMensaje2) => {
//     return (
//         <div className="listaMensajes">
//             <h1>ItemListContainer</h1>
//             <div>{greeting}</div>
//             <div>{mensaje}</div>
//             <div>{otroMensaje}</div>
//             <div>{otroMensaje2}</div>
//         </div>
//     );
// };

export default ItemListContainer;