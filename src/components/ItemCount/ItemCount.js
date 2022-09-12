import React from "react";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ItemCount.css'

const ItemCount = ({ initial, stock }) => {
    const [contador, setContador] = useState(initial)
    const [agregadoAlCarro, setAgregadoAlCarro] = useState(false)

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > initial) {
            setContador(contador - 1)
        }
    }

    const agregarAlCarro = () => {
        setContador(contador)
        setAgregadoAlCarro(!agregadoAlCarro)
        console.log('me agregue al carrito')
    }


    useEffect(() => {
        console.log('me ejecute')

        return () => {
            <h1>Hola</h1>
        }
    }, [agregadoAlCarro])

    return (
        <>
            <Card className="card" style={{ width: '20rem' }}>
                <Card.Body>
                    <Button className="btn-sumar" onClick={() => sumar()} variant="outline-primary">+</Button>
                    <Button className="btn-restar" onClick={() => restar()} variant="outline-primary">-</Button>
                    <span>{contador}</span>
                    <Button className="btn-agregarAlCarro outline-dark" onClick={() => agregarAlCarro()} variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemCount;