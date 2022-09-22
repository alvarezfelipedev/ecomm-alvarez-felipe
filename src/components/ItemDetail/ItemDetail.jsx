import "./ItemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";

const ItemDetail = ({ items }) => {
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (qty) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: `You have selected ${qty} items.`,
    });
    setItemCount(qty);
  };

  return (
    <div className="detalles-caja">
      <div className="img-caja">
        <img className="imagen" src={items.imagen} alt="" />
      </div>
      <div className="titulo-tipo">
        <h1 className="titulo-">{items.titulo}</h1>
        <h2>{items.tipo}</h2>
      </div>
      <div className="descripcion-caja">
        <h2>Description</h2>
        <h3>{items.descripcion}</h3>
      </div>
      <div className="talles-caja">
        <h3>Sizes</h3>
        <button>XS</button>
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
        <div>
          <h3>{items.stock} unidades disponibles</h3>
        </div>
      </div>
      <div>
        <h3>{items.precio}</h3>
      </div>
      <div>
        {itemCount === 0 ? (
          <ItemCount
            stock={items.stock}
            initial={itemCount}
            onAdd={onAdd}
            disabled
          />
        ) : (
          <Link to="/cart">
            <Button style={{ textDecoration: "none" }} variant="danger">
              CheckOut
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
