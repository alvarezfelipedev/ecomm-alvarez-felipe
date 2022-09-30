import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, titulo, precio, imagen, tipo }) => {
  return (
    <>
      <Card style={{ width: "15rem" }} className='card-'>
        <Card.Img className="rotate-vertical-center" variant="top" src={imagen} />
        <Card.Body>
          <Card.Title className="titulo">{titulo}</Card.Title>
          <Card.Title className="tipo">{tipo}</Card.Title>
          <Card.Text className="precio">${precio}</Card.Text>
          <Button className="rotate-vertical-center btn-details">
            <Link className="details" to={`/item/${id}`}>
              Details
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
