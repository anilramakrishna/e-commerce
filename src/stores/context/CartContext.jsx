import React, { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const addItem = (item) => {
        if (cartItems.includes(item) === false) {
            setCartItems([...cartItems, item])
            setTotalPrice(totalPrice + parseInt(item.price))
        }
    }
    const removeCartItem = (item) => {
        setCartItems(cartItems.filter((it) => it !== item))
        setTotalPrice(totalPrice - parseInt(item.price))
    }
    return (
        <CartContext.Provider value={{ cartItems, addItem, removeCartItem,totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    return useContext(CartContext)
}