import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import "./CartWidget.css";
import Badge from 'react-bootstrap/Badge';


const Carrito = () => {
  const ctx = useContext(CartContext);

  return (
    <>
    <div className="cartWidget">
    <MdOutlineShoppingBag/> 
    <Badge bg="light" text="dark">{ctx.calcItemsQty()}</Badge>
    </div>
    </>
  );
};

export default Carrito;
