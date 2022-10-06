import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <section className=" d-flex flex-wrap justify-content-center list">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          titulo={item.titulo}
          precio={item.precio}
          imagen={item.imagen}
          descripcion={item.descripcion}
          tipo={item.tipo}
        />
      ))}
    </section>
  );
};

export default ItemList;
