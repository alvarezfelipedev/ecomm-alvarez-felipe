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
      <Card className="card" style={{ width: "20rem" }}>
        <Card.Body>
          <Button
            className="btn-sumar"
            onClick={handleRateMax}
            variant="outline-primary"
          >
            +
          </Button>

          <span>{contador}</span>

          <Button
            className="btn-restar"
            variant="outline-primary"
            onClick={handleRateMin}
          >
            -
          </Button>

          <Button
            className="btn-agregarAlCarro outline-dark"
            onClick={() => onAdd(contador)}
            variant="primary"
            disabled={stock === 0 && true}
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCount;
