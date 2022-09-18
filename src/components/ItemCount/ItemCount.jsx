import React from "react";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ItemCount.css'

const ItemCount = ({ initial, stock }) => {
    const [contador, setContador] = useState(initial)
    const [agregadoAlCarro, setAgregadoAlCarro] = useState(false)

    const handleRateMax = () => {
        if (contador < stock) {
            setContador(contador + 1)
        } else {
            setContador(contador)
        }
    }

    const handleRateMin = () => {
        if (contador > 1) {
            setContador(contador - 1)
        } else {
            setContador(contador)
        }
    }

    function agregarAlCarro() {
        setContador(contador);
        setAgregadoAlCarro(!agregadoAlCarro);
    }

    useEffect(() => {
        return () => {
            <h1>Hola</h1>
        }
    }, [agregadoAlCarro]) // Array de dependencias

    return (
        <>
            <Card className="card" style={{ width: '20rem' }}>
                <Card.Body>
                    <Button className="btn-sumar" onClick={handleRateMax} variant="outline-primary">+</Button>

                    <span>{contador}</span>

                    <Button className="btn-restar" variant="outline-primary" onClick={handleRateMin} >-</Button>

                    <Button className="btn-agregarAlCarro outline-dark" onClick={() => agregarAlCarro()} variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemCount;