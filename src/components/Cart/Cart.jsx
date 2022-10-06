import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import Button from "react-bootstrap/Button";
import {
  serverTimestamp,
  doc,
  setDoc,
  collection,
  increment,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../utils/FirebaseConfig";
import "./Cart.css";

const Cart = () => {
  const ctx = useContext(CartContext);

  // Generar orden de compra:
  const createOrder = async () => {
    const itemsForDB = ctx.cartList.map((item) => ({
      id: item.id,
      title: item.titulo,
      price: item.precio,
      quantity: item.qty,
    }));
    let order = {
      buyer: {
        name: "Lionel Messi",
        email: "lionelmessi10@gmail.com",
        phone: "1122573990",
      },
      items: itemsForDB,
      date: serverTimestamp(),
      total: ctx.calcTotal(),
    };
    const newOrderRef = doc(collection(db, "orders"));
    await setDoc(newOrderRef, order);

    ctx.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.qty),
      });
    });
    ctx.clear();
    alert(
      `Your order has been created! This is your ID order: ${newOrderRef.id}`
    );
  };

  return (
    <>
      <div>
        <h1 className="titulo-cart">YOUR CART</h1>

        <div className="d-flex btn-delete-buy">
          <Button
            className="outline-secondary btn-delete-all"
            onClick={ctx.clear}
            disabled={ctx.cartList.length === 0}
            variant="outline-none"
          >
            DELETE ALL
          </Button>

          <Button
            className="d-flex btn-buy"
            disabled={ctx.cartList.length === 0}
            onClick={createOrder}
            variant="outline-none"
          >
            BUY NOW
          </Button>
        </div>

        <div className="d-flex price-item">
          <div className="d-flex item-detail">
            {ctx.cartList.map((item) => (
              <ol key={item.id}>
                <div className="d-flex">
                  <h2>{item.titulo}</h2>
                  <Button
                    className="btn-delete-item"
                    variant="outline-none"
                    onClick={() => ctx.removeItem(item.id)}
                  >
                    Delete this product
                  </Button>
                </div>
                <div className="d-flex img-qty-item">
                  <img
                    className="img-cart"
                    src={`${item.imagen}`}
                    alt="Product selected"
                  />
                  <div className="qty-item">
                    <h3>Quantity: {item.qty}</h3>
                    <h3>Price per Item: ${item.precio}</h3>
                    <h4>
                      Total price per Item: ${ctx.calcTotalPerItem(item.id)}
                    </h4>
                  </div>
                </div>
              </ol>
            ))}
          </div>

          <div className="total-price">
            <h1>Total price: ${ctx.calcTotal()}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
