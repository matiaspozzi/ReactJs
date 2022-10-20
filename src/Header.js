import React from "react";
import Nav from "./Nav";

   

function Header(parameter) {
     let nombreCompleto = parameter.nombre + " de " + parameter.apellido
    
    return (
        <header id="mainAndHeader">
            <h1>HouseMusic</h1>
            <p>Bienvenido {nombreCompleto} ! </p>
            <Nav/>
        </header>
    )
}

export default Header