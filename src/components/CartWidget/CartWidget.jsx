import React from "react";
import { useContext, useEffect } from "react";
// import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext/CartContext";
import "./CartWidget.css";

const Carrito = () => {
  const { calcItemsQty } = useContext(CartContext);

  useEffect(() => {
    calcItemsQty();
  }, [calcItemsQty])


  return (
    // <div className="cartWidget" cartWidget={test.calcItemsQty()}>
    //   <FaShoppingCart />
    // </div>

    // <Button  variant="primary">
    //   <FaShoppingCart />

    <Badge bg="secondary" badgeContent={calcItemsQty()}>
      <FaShoppingCart />
    </Badge>
    //   <span cartWidget={test.calcItemsQty()} className="visually-hidden"></span>
    // </Button>
    // <>
    // <FaShoppingCart />
    // <span cartWidget={test.calcItemsQty()} className="visually-hidden"></span>
    // </>
  );
};

export default Carrito;
