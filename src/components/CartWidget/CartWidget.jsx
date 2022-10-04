import React from "react";
// import { MdOutlineShoppingBag } from "react-icons/md";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import "./CartWidget.css";
import Badge from 'react-bootstrap/Badge';


const Carrito = () => {
  const ctx = useContext(CartContext);

  return (
    <>
      <div className="cartWidget">
        <img className="img-cart-" src="https://img.icons8.com/ios/20/000000/shopping-bag--v1.png" alt="imagen" />
        <Badge className="badge- bg-- rounded-circle bg-warning">
          {ctx.calcItemsQty()}</Badge>
      </div>
    </>
  );
};

export default Carrito;
