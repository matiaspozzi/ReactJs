import React from 'react'
import cart from "../img/cart.svg"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="orderNav">
            <Link className='underline' to="/productos/controladoras de sonido">Controladoras de sonido</Link>
            <Link className='underline' to="/productos/monitores de Audio">Monitores de Audio</Link>
            <Link className='underline' to="/productos/controladores Midi">Controladores Midi</Link>
            <div>
            <Link to="/Carrito">
               <img className="img" src={cart} alt="Icono carrito" />
            </Link>
            </div>
        </nav>




    )
}

export default Nav