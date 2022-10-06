import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const handleRateMax = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      setContador(contador);
    }
  };

  const handleRateMin = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      setContador(contador);
    }
  };

  return (
    <>
      <Card className="card" variant="none">
        <Card.Body>
          <Button
            className="btn-sumar"
            onClick={handleRateMax}
            variant="outline-none"
          >
            +
          </Button>

          <span>{contador}</span>

          <Button
            className="btn-restar"
            variant="outline-none"
            onClick={handleRateMin}
          >
            -
          </Button>

          <Button
            className="btn-agregarAlCarro outline-dark"
            onClick={() => onAdd(contador)}
            variant="outline-none"
            disabled={(contador === 0 && true) || (stock === 0 && true)}
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCount;
