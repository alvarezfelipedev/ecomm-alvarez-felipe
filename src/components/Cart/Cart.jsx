import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import Button from "react-bootstrap/Button";

import "./Cart.css";

const Cart = () => {
  const ctx = useContext(CartContext);
  const { calcTotal } = useContext(CartContext)

  return (
    <>
      <div>
        <h1 className="titulo-cart">YOUR CART</h1>

        <Button className="btn-delete-all" onClick={ctx.clear}>
          Delete All
        </Button>

        <span>{calcTotal()}</span>

        {ctx.cartList.map((item) => (
          <ol>
            <h1>{item.titulo}</h1>
            <h3>Price:{item.precio}</h3>
            <h3>Cantidad:{item.qty}</h3>
            <img className="img-cart" src={`${item.imagen}`} alt="" />
            <Button
              className="btn-delete-item"
              onClick={() => ctx.removeItem(item.id)}
            >
              Delete this product
            </Button>
          </ol>
        ))}

        {/* {ctx.cartList.map((item) => (
          <ol>
            <h1>{item.titulo}</h1>
            <h3>Price:{item.precio}</h3>
            
            
          </ol>
        ))} */}
      </div>

    </>
  );
};

export default Cart;
