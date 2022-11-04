import React from "react";

const CartWidget = () => {
    const cantidadEnCarrito = 3
    return(
        <div className="content-carrito">
        <span>shopping_cart</span>
        <span>{cantidadEnCarrito}</span>
        </div>
        
    )
}

export default CartWidget