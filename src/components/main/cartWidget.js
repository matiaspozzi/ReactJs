import { useContext } from "react"
import React from "react";
import { contexto } from "../ContextProvider";



const CartWidget = () => {
    
    const valorDelContexto = useContext(contexto)
    
    return (
        
            <div className="content-carrito">
                <span>{valorDelContexto.cantidad}</span>
            </div>
        
    )
}

export default CartWidget