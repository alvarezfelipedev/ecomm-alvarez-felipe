import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const firstElement = (id) => {
        return cartList.find(item => item.id === id);
    }

    const addQtys = (product, qty) => {
        return cartList.map(item => item.id === product.id ? {
            ...item,qty: item.qty + qty
        } : item)
    }

    const addItem = (item, qty) => {

        if (isInCart(item.id)) {
            setCartList(addQtys(item, qty))
        } else {
            item.qty = qty;
            setCartList([...cartList, item]);
        }
    }

    const isInCart = (id) => {
        return cartList.find(item => item.id === id);

    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    }

    const calcTotalPerItem = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].costItem * cartList[index].qtyItem;
    }


    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.id));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{ cartList, firstElement, addQtys, addItem, isInCart, clear, removeItem, calcTotal, calcItemsQty }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;