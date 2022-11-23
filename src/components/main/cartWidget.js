import { useContext } from "react"
import React from "react";
import { contexto } from "../../App";
import { Link } from "react-router-dom"

const CartWidget = () => {
    
    const valorDelContexto = useContext(contexto)
    
    return (
        
        <Link to="/Carrito">
            <div className="content-carrito">
                <span>{valorDelContexto.cantidad}</span>
            </div>
        </Link>
    )
}

export default CartWidget