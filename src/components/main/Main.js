import React from "react";
import { Routes, Route } from "react-router-dom"
import ItemListContainer from "../itemListContainer/ItemListContainer";
import ItemDetailContainer from '../ItemDetailContainer';
import Carrito from "../Pages/Carrito";


const Main = () => {
    return (
        <main>

            <Routes>

                <Route path='/' element={<ItemListContainer />} />

                <Route path='/products' element={<ItemListContainer />} />

                <Route path='/item/:id' element={<ItemDetailContainer />} />

                <Route path='/products/:category' element={<ItemListContainer />} />

                <Route path='/item/:id' element={<ItemDetailContainer />} />

                <Route path='/Carrito' element={<Carrito />} />
               

            </Routes>

        </main>

    )
}

export default Main