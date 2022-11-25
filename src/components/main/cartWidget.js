import { useContext } from "react"
import React from "react";
import { contexto } from "../ContextProvider";
import { Link } from "react-router-dom"

const CartWidget = () => {
    
    const valorDelContexto = useContext(contexto)
    
    return (
        
            <div className="content-carrito">
                <span>{valorDelContexto.cantidad}</span>
            </div>
        
    )
}

export default CartWidget