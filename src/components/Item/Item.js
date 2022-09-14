import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'

const Item = ({ titulo, precio, imagen, descripcion, tipo }) => {
  return (
    <>
        <Card className='' style={{ width: '15rem' }}>
          <Card.Img variant="top" src={imagen} />
          <Card.Body>
            <Card.Title className='titulo'>{titulo}</Card.Title>
            <Card.Title className='tipo'>{tipo}</Card.Title>
            <Card.Text className='precio'>{precio}</Card.Text>
            {/* <Card.Text>{descripcion}</Card.Text> */}
            <Button variant="primary">Details</Button>
          </Card.Body>
        </Card>
    </>
  )
}

export default Item;
