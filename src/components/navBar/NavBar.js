import React from 'react'
import cart from "../img/cart.svg"

const Nav = () => {
    return (
        <nav>
            <a className="link" href="#">Controladoras de sonido</a>
            <a className="link" href="#">Monitores de audio</a>
            <a className="link" href="#">Controladores Midi</a>
            <div>
            </div>
            
            <img src= {cart} alt="Icono carrito" />
        </nav>
    
    
    
    
        )
}

export default Nav