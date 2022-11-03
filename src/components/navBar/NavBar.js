import React from 'react'
import cart from "../img/cart.svg"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="orderNav">
            <Link to="/Controladoras de sonido">Controladoras de sonido</Link>
            <Link to="Monitores de Audio">Monitores de Audio</Link>
            <Link to="Controladores Midi">Controladores Midi</Link>
            <div>
            <Link to="/Carrito">
               <img className="img" src={cart} alt="Icono carrito" />
            </Link>
            </div>
        </nav>




    )
}

export default Nav