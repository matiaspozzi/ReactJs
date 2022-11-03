import React from "react";
import NavBar from "../navBar/NavBar"
import housemusic from "../img/housemusic.png"
import { Link } from "react-router-dom";



function Header(parameter) {
    let nombreCompleto = parameter.nombre + " de " + parameter.apellido

    return (
        <header id="mainAndHeader">
            <div>
                <Link to="Home">
                    <img className="imgHouse" src={housemusic} alt="IconoHm" />
                </Link>
            </div>
            <p>Bienvenido {nombreCompleto} ! </p>
            <NavBar />
            <cartWidget />
        </header>
    )
}
export default Header
