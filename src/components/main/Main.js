import React from "react";
import { Routes, Route } from "react-router-dom"
import Carrito from "../Pages/Carrito";
import Home from "../Pages/Home";


const Main = () => {
    return (
        <main>

            <Routes>
                {/* home */}
                <Route path="/" element={Home} />
               {/* Mescladoras de Sonido */}
                <Route/>
                {/* Monitores de Audio */}
                <Route/>
                {/* Controladores Midi */}
                <Route/>
                {/* Carrito */}
                <Route path="/Carrito" element={Carrito}  />

            </Routes>

        </main>

    )
}

export default Main