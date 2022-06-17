import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            setTotalPrice(totalPrice + (product.price * product.countItem))
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
        console.log("El producto ya se encuentra en el carrito")
    }

    const deleteProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(isInCart) {
            console.log("cartListItems:", cartListItems)
            console.log("product.title", product.id)
            cartListItems.splice(cartListItems.indexOf(product.title), 1)
        }
        console.log("El producto no se encuentra en el carrito")
    }

    const info = {
        cartListItems,
        addProductToCart,
        totalPrice,
        deleteProductToCart
    }

    return(
        <CartContext.Provider value={info}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }