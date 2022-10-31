import React from "react";
import NavBar from "../navBar/NavBar"
import housemusic from "../img/housemusic.png"



function Header(parameter) {
    let nombreCompleto = parameter.nombre + " de " + parameter.apellido

    return (
        <header id="mainAndHeader">
            <div>
                <img className="imgHouse" src= {housemusic} alt="IconoHm" />
            </div>
            <p>Bienvenido {nombreCompleto} ! </p>
            <NavBar />
            <cartWidget/>
        </header>
    )
}
export default Header
