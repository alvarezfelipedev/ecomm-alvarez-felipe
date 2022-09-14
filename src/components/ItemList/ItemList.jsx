import Item from "../Item/Item";

const ItemList =( { items } ) => {//{data}
    return (
    <div className="d-flex flex-wrap justify-content-center ">
    {items.map(item => (
        <Item
          key={item.id}
          id={item.id}
          titulo={item.titulo}
          precio={item.precio}
          imagen={item.imagen}
          descripcion={item.descripcion}
          tipo={item.tipo}
        />
      ))
      }
    </div>
    )
}

export default ItemList;