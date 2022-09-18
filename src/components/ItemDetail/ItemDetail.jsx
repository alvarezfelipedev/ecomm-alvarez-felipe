const ItemDetail = ({items}) => {
    return (
      <div>
        <h1>{items.titulo}</h1>
        <img src={items.imagen} alt=""/>
        <h3>{items.tipo}</h3>
        <h3>{items.precio}</h3>
        <h3>{items.descripcion}</h3>
      </div>
    )
}

export default ItemDetail;
