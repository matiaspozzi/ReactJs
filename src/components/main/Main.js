import React from "react";
import { Routes, Route } from "react-router-dom"
import ItemListContainer from "../itemListContainer/ItemListContainer";
import ItemDetailContainer from '../ItemDetailContainer';


const Main = () => {
    return (
        <main>

            <Routes>

                <Route path='/' element={<ItemListContainer />} />

                <Route path='/products' element={<ItemListContainer />} />

                <Route path='/products/:category' element={<ItemListContainer />} />

                <Route path='/item/:id' element={<ItemDetailContainer />} />

               

            </Routes>

        </main>

    )
}

export default Main